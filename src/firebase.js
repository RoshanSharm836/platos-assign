// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNaIGGcQ4Opxk1sTlZ6Gkq49auEYnN714",
  authDomain: "platosproject.firebaseapp.com",
  projectId: "platosproject",
  storageBucket: "platosproject.appspot.com",
  messagingSenderId: "676939395170",
  appId: "1:676939395170:web:b43e604fc7ccc70870213b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
