// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtgA11jUu-KjFlr0UC5A6O9S0M-Vy8-6s",
  authDomain: "auth-integration-2a3a4.firebaseapp.com",
  projectId: "auth-integration-2a3a4",
  storageBucket: "auth-integration-2a3a4.firebasestorage.app",
  messagingSenderId: "537564210025",
  appId: "1:537564210025:web:f18fa252bf79dc6b76d3f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
