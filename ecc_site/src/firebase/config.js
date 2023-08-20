// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7GwRRHZOhSjU43UBRQsn6Lj_CRFFzqzk",
  authDomain: "talktipsy-861d9.firebaseapp.com",
  projectId: "talktipsy-861d9",
  storageBucket: "talktipsy-861d9.appspot.com",
  messagingSenderId: "730803157447",
  appId: "1:730803157447:web:744c5ac14602c3ccef41e2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);
