'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from './firebase';
import Cookies from 'js-cookie';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signIn(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        setCurrentUser(userCredential.user);
        
        // Set a cookie to help with server-side auth checks
        Cookies.set('firebase_auth', 'true', { 
          expires: 1, // 1 day
          path: '/',
          sameSite: 'strict'
        });
      });
  }

  async function logOut() {
    return await signOut(auth).then(() => {
      setCurrentUser(null);
      // Remove the auth cookie
      Cookies.remove('firebase_auth', { path: '/' });
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      // Update cookie based on auth state
      if (user) {
        Cookies.set('firebase_auth', 'true', { 
          expires: 1,
          path: '/',
          sameSite: 'strict'
        });
      } else {
        Cookies.remove('firebase_auth', { path: '/' });
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signIn,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 