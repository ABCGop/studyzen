/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable SWC and disable Babel
  swcMinify: true,
  compiler: {
    // Force SWC compilation
    styledComponents: true,
  },
  // Fix experimental properties
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {
    // Force SWC transforms
    forceSwcTransforms: true,
    serverActions: true,
  },
  // Environment variables that will be available at build time
  env: {
    JWT_SECRET: 'studyzen-secret-key-change-in-production',
    ADMIN_EMAIL: 'admin@studyzen.com',
    ADMIN_PASSWORD: 'admin123',
    // Firebase configuration - replace with your own Firebase project details
    NEXT_PUBLIC_FIREBASE_API_KEY: 'AIzaSyDAX43FFgSG7wEp3pUvc6-1YGtHei_vbzA',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'studyzen-c7e36.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'studyzen-c7e36',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'studyzen-c7e36.firebasestorage.app',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '149604059363',
    NEXT_PUBLIC_FIREBASE_APP_ID: '1:149604059363:web:e822fe1d77ec65ade09dd6',
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: 'G-KD2J9CDL5V',
    
    // Firebase Admin SDK configuration - replace with your service account details
    FIREBASE_ADMIN_PROJECT_ID: 'studyzen-c7e36',
    FIREBASE_ADMIN_PRIVATE_KEY_ID: 'a5f182dc6567259e909719f147fa6cfc97667723',
    FIREBASE_ADMIN_PRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDSDPd4tBV2sRZh\nScLkSXpeaOW5nax0DnZ1QlOJXqzW7lVgf8VtzzTDxKLn47+lImRUT2L4usVlFQfP\nyb3yaFzZg9IlBGGPsfM0WAiWm4No+gnFcspUp5iUD5O7ezizfv8OiygunSIwhaBo\nXnFkOG2sLvGjrRLO8WOO6cFHwe3oOmps7CGAnjVSE0YiZeLEbHJ+eCcGsOIZbTh9\nR4lxFTgM1YD/n9ad/yPZREPlxMrFio3GnqaTT9lTf4/+JgstKhVYxZzCIvdgovsI\nOBlRsxaP5q9HrCeZjvAVd7cACvl/pOVG43MBJoujHkK3vymyD4a6xv82rPdlwtHy\nUvgUlCSRAgMBAAECggEAGvXkG7Ti87bw0Zrx7h2fnGzoCOY744eUXSJJbkkzHmvn\n6c4XQqwaWy2q3+Bj0afI6z4R94Ki4dcMXMzJryAFxDt/ERZEtCNvPR7hjKc4UOnr\nBXy24J0Zte4L6b/7+/oHIHrsX5NL90tngTiXYvmP23kJC0JPNuBVMDDrszCpPym9\n8GEhod10c8E/D6qyyPKaRWZjUyiGa1FpEF7sHfRWPIGSfacQlElqd3XITzrYogmb\ntN+6SrpbWHMqKoGO1p4JieoEIH+02KD+nUTvdD1IXGaWh0vg8fj6tLaefXjSaruv\n+GIXjInmFuq2MBIeFsaWX8XeLCXVyJzFkJZQDeevawKBgQD6DJA8gLhA42xQMAgC\nIPOsOgCa1wAOA60dFvL5f4nJ73CTd/BKEs6T3GoHEZvnjacQxYp6QRb0mkNfXMkY\n8lkf6i1FoJQXDc5wLjYxH59xPwaJkm5nAhHl5k+MkI2vp0MXrZj9DOy2N8bbVHmm\nhb44q4HqijVW2iksorfQxnEyvwKBgQDXDLX6Dz/MrhBpptvbkSTp9Jw1NNqPcTur\nfjDCApVpWgnYmauOIC0Ycb/alvGEsN5zAJlUPauPEyua+CMJTZJwWT1HDTvVYfnF\nKKvGIBF3e5sCkOqz3CSqiBAh6VHX3FM23ESDWxzGrhKQye3VjzH1iItZDpBUt5wy\nXl1pAQ6MrwKBgQC1kBfPhtvDah+E3kuCWDD3VqqHxCPrCSpTXA2TstL3SSBiRA27\ni4pqfPqUJWoiKY4stHOHr+meNMFE5lezAI5MiTrUOvQtBT5n4HZDFyYsEcqKbEQ0\nEaGzYJdUhsYKzJYABHJ5FEBxU3DWY7Ftg+GKvqY4CqEObpzFJ2X3d5BMewKBgQCy\ni28bKkYCHhKqZUrsxVkslVaMJlG//ndYLvE0YwjB62t5VjzFR5mpTefICMKFNIO8\nX6bt9jXWGEh/5bzRIIKQnMbvkuE2jJ3fP6E+Yame1hUg0EjNA929aDJctWaqHddJ\nGSAZHzCJFEV9yOmaAcWs4a0wR5M1gyw/9XEAmUwHKQKBgQCiV5k+VBSfrpnFjx54\n+3GHmctXt6tEH3U3qXx1Hz1JtoTFsNrfxk0mYOjiPwba5ldmI7jT5zuC/+5kTshQ\naqIzoOM9iF5dzkMhh684McSfmqPND10yHTO7XeiXTq3nMj0hQOMFEo6tGiQCrr3e\nLgwjKXNx9R1PxAk79txMzsJAUg==\n-----END PRIVATE KEY-----\n',
    FIREBASE_ADMIN_CLIENT_EMAIL: 'firebase-adminsdk-fbsvc@studyzen-c7e36.iam.gserviceaccount.com',
    FIREBASE_ADMIN_CLIENT_ID: '115497523479409889315',
    FIREBASE_ADMIN_CLIENT_CERT_URL: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40studyzen-c7e36.iam.gserviceaccount.com',
    FIREBASE_STORAGE_BUCKET: 'studyzen-c7e36.firebasestorage.app',
  },
}

module.exports = nextConfig 