// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABXfRNv1hAaRiekTCGcgeBaKvJkAYz8M0",
  authDomain: "prepwise-7e0a7.firebaseapp.com",
  projectId: "prepwise-7e0a7",
  storageBucket: "prepwise-7e0a7.firebasestorage.app",
  messagingSenderId: "788471653999",
  appId: "1:788471653999:web:4454e0f482c9fe98114f9a",
  measurementId: "G-PRK0Q10VNP",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
