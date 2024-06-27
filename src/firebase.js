// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-next-a179f.firebaseapp.com",
  projectId: "twitter-next-a179f",
  storageBucket: "twitter-next-a179f.appspot.com",
  messagingSenderId: "740134091823",
  appId: "1:740134091823:web:b54d03c6e3b6c02da39ada",
  measurementId: "G-D7LBSWQKR6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);