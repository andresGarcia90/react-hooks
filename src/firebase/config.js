// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAThXfcMjjhfsZCKgZwOnioN2eu8IFdDdM",
  authDomain: "react-cursos-f7d34.firebaseapp.com",
  projectId: "react-cursos-f7d34",
  storageBucket: "react-cursos-f7d34.appspot.com",
  messagingSenderId: "728148808225",
  appId: "1:728148808225:web:fda619033fc69d6fb3c960"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const firebaseDB = getFirestore(FirebaseApp);