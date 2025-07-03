/**
 * Script to create an admin user in Firebase Authentication
 * 
 * Usage: 
 * 1. Run: node scripts/create-admin-user.js
 */

const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signOut } = require('firebase/auth');

// Get Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDAX43FFgSG7wEp3pUvc6-1YGtHei_vbzA",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "studyzen-c7e36.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "studyzen-c7e36",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "studyzen-c7e36.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "149604059363",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:149604059363:web:e822fe1d77ec65ade09dd6"
};

// Admin user credentials
const adminEmail = "admin@studyzen.com";
const adminPassword = "admin123"; // Use a strong password in production

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function createAdminUser() {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    const user = userCredential.user;
    
    console.log(`Admin user created successfully with UID: ${user.uid}`);
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    
    // Sign out after creating user
    await signOut(auth);
    
    console.log("Done! You can now use these credentials to log in to the admin panel.");
    
  } catch (error) {
    console.error("Error creating admin user:", error);
    if (error.code === 'auth/email-already-in-use') {
      console.log("This admin user already exists. You can use the existing credentials to log in.");
      console.log(`Email: ${adminEmail}`);
      console.log(`Password: ${adminPassword}`);
    }
  }
}

createAdminUser(); 