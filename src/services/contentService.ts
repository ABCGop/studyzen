import { db } from '@/lib/firebase';
import { Content, ContentType } from '@/models/Content';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { getContentFilePath } from '@/utils/fileClient';
import path from 'path';

// Constants
const CONTENTS_COLLECTION = 'contents';

/**
 * Helper function to delete a file via API
 */
async function deleteFileViaApi(filePath: string): Promise<void> {
  try {
    // Skip if no file path
    if (!filePath || !filePath.startsWith('/uploads/')) return;

    // Get auth token
    const auth = (await import('@/lib/firebase')).auth;
    const token = await auth.currentUser?.getIdToken();

    if (!token) {
      throw new Error('Not authenticated');
    }

    // Call the delete-file API
    const response = await fetch('/api/content/delete-file', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ filePath })
    });

    if (!response.ok) {
      throw new Error(`Failed to delete file: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.warn('Error deleting file:', error);
  }
}

// Helper function to convert Firestore data to Content object
const convertToContent = (doc: any): Content => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    createdAt: data.createdAt?.toDate() || new Date(),
    updatedAt: data.updatedAt?.toDate() || new Date()
  };
};

// Create new content - file uploads now handled by API
export const createContent = async (content: Omit<Content, 'id' | 'createdAt' | 'updatedAt'>): Promise<Content> => {
  try {
    // Create content in Firestore
    const docRef = await addDoc(collection(db, CONTENTS_COLLECTION), {
      ...content,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    // Return the created content with ID
    return {
      id: docRef.id,
      ...content,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  } catch (error) {
    console.error('Error creating content:', error);
    throw error;
  }
};

// Get all contents
export const getAllContents = async (): Promise<Content[]> => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, CONTENTS_COLLECTION), orderBy('createdAt', 'desc'))
    );
    return querySnapshot.docs.map(convertToContent);
  } catch (error) {
    console.error('Error getting contents:', error);
    throw error;
  }
};

// Get contents by type
export const getContentsByType = async (type: ContentType): Promise<Content[]> => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, CONTENTS_COLLECTION), 
        where('type', '==', type),
        orderBy('createdAt', 'desc')
      )
    );
    return querySnapshot.docs.map(convertToContent);
  } catch (error) {
    console.error(`Error getting contents for type ${type}:`, error);
    throw error;
  }
};

// Get contents by class
export const getContentsByClass = async (type: ContentType, classNum: string): Promise<Content[]> => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, CONTENTS_COLLECTION), 
        where('type', '==', type),
        where('classNum', '==', classNum),
        orderBy('createdAt', 'desc')
      )
    );
    return querySnapshot.docs.map(convertToContent);
  } catch (error) {
    console.error(`Error getting contents for class ${classNum}:`, error);
    throw error;
  }
};

// Get contents by subject
export const getContentsBySubject = async (
  type: ContentType, 
  classNum: string, 
  subject: string
): Promise<Content[]> => {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, CONTENTS_COLLECTION), 
        where('type', '==', type),
        where('classNum', '==', classNum),
        where('subject', '==', subject),
        orderBy('createdAt', 'desc')
      )
    );
    return querySnapshot.docs.map(convertToContent);
  } catch (error) {
    console.error(`Error getting contents for subject ${subject}:`, error);
    throw error;
  }
};

// Get content by ID
export const getContentById = async (id: string): Promise<Content | null> => {
  try {
    const docRef = doc(db, CONTENTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return null;
    }
    
    return convertToContent(docSnap);
  } catch (error) {
    console.error(`Error getting content with ID ${id}:`, error);
    throw error;
  }
};

// Update content
export const updateContent = async (id: string, contentData: Partial<Content>): Promise<Content> => {
  try {
    const docRef = doc(db, CONTENTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      throw new Error(`Content with ID ${id} not found`);
    }
    
    const existingContent = convertToContent(docSnap);
    
    // Update content in Firestore
    const updateData = {
      ...contentData,
      updatedAt: serverTimestamp()
    };
    
    await updateDoc(docRef, updateData);
    
    return {
      ...existingContent,
      ...contentData,
      updatedAt: new Date()
    };
  } catch (error) {
    console.error(`Error updating content with ID ${id}:`, error);
    throw error;
  }
};

// Delete content
export const deleteContent = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, CONTENTS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      throw new Error(`Content with ID ${id} not found`);
    }
    
    // Get the content data
    const content = convertToContent(docSnap);
    
    // Delete the associated file if it exists
    if (content.pdfPath) {
      await deleteFileViaApi(content.pdfPath);
    }
    
    // Delete content from Firestore
    await deleteDoc(docRef);
  } catch (error) {
    console.error(`Error deleting content with ID ${id}:`, error);
    throw error;
  }
}; 