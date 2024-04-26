import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUoAV8_Zy_h6JK2kFXK--YysHWRk69K0A",
  authDomain: "insight-hub-5cb75.firebaseapp.com",
  projectId: "insight-hub-5cb75",
  storageBucket: "insight-hub-5cb75.appspot.com",
  messagingSenderId: "442139607429",
  appId: "1:442139607429:web:7e814463de09a1566e44ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // Get Database instance
export const auth = getAuth(app); // Get the Auth service

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile }; // Export the functions

// Firestore Data Structure
  // /users (collection)
  //   /{UserID} (document)
  //     /user_reports (subcollection)
  //       /{ReportID} (document)

  