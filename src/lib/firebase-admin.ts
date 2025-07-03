import { getApps, initializeApp, cert, ServiceAccount, App } from 'firebase-admin/app';

// Load Firebase Admin service account
const serviceAccountKey = {
  type: "service_account",
  project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
  private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_CERT_URL,
  universe_domain: "googleapis.com"
};

export function initializeFirebaseAdmin(): App {
  const apps = getApps();
  
  // If Firebase admin is already initialized, return the existing app
  if (apps.length > 0) {
    return apps[0];
  }

  // Initialize Firebase Admin with service account
  return initializeApp({
    credential: cert(serviceAccountKey as ServiceAccount),
    // Optional: You can specify the storage bucket if you're using Firebase Storage
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
} 