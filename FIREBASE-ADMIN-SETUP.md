# Firebase Authentication Setup for StudyZen Admin Panel

This guide will help you set up Firebase Authentication for the StudyZen admin panel.

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Give your project a name (e.g., "studyzen")
4. Enable Google Analytics (optional)
5. Create the project

## 2. Set Up Firebase Authentication

1. In your Firebase project console, go to "Authentication"
2. Click "Get started"
3. Enable "Email/Password" authentication
4. Save your changes

## 3. Create a Web App in Firebase

1. In your Firebase project console, click on the gear icon ⚙️ and select "Project settings"
2. Under "Your apps", click "Add app" and select the web icon (</>)
3. Register your app with a nickname (e.g., "studyzen-web")
4. Copy the Firebase configuration object

## 4. Update Environment Variables

1. Open `next.config.js` in your project
2. Replace the Firebase configuration values with your actual Firebase config:

```javascript
// Firebase configuration
NEXT_PUBLIC_FIREBASE_API_KEY: 'your-api-key',
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'your-project-id.firebaseapp.com',
NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'your-project-id',
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'your-project-id.appspot.com',
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: 'your-messaging-sender-id',
NEXT_PUBLIC_FIREBASE_APP_ID: 'your-app-id',
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: 'your-measurement-id', // optional
```

## 5. Set Up Firebase Admin SDK

1. In your Firebase project console, go to "Project settings"
2. Go to the "Service accounts" tab
3. Click "Generate new private key"
4. Download the JSON file
5. Open the JSON file and update the Firebase Admin SDK variables in `next.config.js`:

```javascript
// Firebase Admin SDK configuration
FIREBASE_ADMIN_PROJECT_ID: 'your-project-id',
FIREBASE_ADMIN_PRIVATE_KEY_ID: 'private-key-id-from-json',
FIREBASE_ADMIN_PRIVATE_KEY: 'private-key-from-json', // Make sure to replace \n with \\n
FIREBASE_ADMIN_CLIENT_EMAIL: 'client-email-from-json',
FIREBASE_ADMIN_CLIENT_ID: 'client-id-from-json',
FIREBASE_ADMIN_CLIENT_CERT_URL: 'client-cert-url-from-json',
FIREBASE_STORAGE_BUCKET: 'your-project-id.appspot.com',
```

## 6. Create an Admin User

1. Update the admin credentials in `scripts/create-admin-user.js`:

```javascript
const adminEmail = "your-admin-email@example.com";
const adminPassword = "your-secure-password";
```

2. Make sure your Firebase configuration in this script matches your project
3. Install the required dependencies:

```bash
npm install firebase
```

4. Run the script to create an admin user:

```bash
node scripts/create-admin-user.js
```

## 7. Set Up Firestore Database (Optional)

If you want to store additional user data or content metadata:

1. In your Firebase project console, go to "Firestore Database"
2. Click "Create database"
3. Choose a starting mode (Start in production mode is recommended)
4. Choose a location
5. Create the database
6. Add the following security rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all users
    match /{document=**} {
      allow read: if true;
    }
    
    // Allow write access only to authenticated admin users
    match /users/{userId} {
      allow write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null;
    }
    
    // Content can only be modified by admins
    match /content/{contentId} {
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## 8. Testing the Admin Login

1. Restart your Next.js development server
2. Navigate to `/admin/login`
3. Enter your admin credentials
4. You should be redirected to the admin dashboard

## Security Notes

1. **Never commit your real Firebase credentials to a public repository**
2. Consider using environment variables or a `.env.local` file instead of putting credentials directly in `next.config.js`
3. Set up proper security rules in Firebase to protect your data
4. Use a strong password for your admin account
5. Consider adding additional authentication methods like Google Sign-In or Multi-factor Authentication for production use 