import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjv8JbwXifdtAlthCUhF86eAI3-eoX0pI",
  authDomain: "kerry3dwarehouse.firebaseapp.com",
  projectId: "kerry3dwarehouse",
  storageBucket: "kerry3dwarehouse.appspot.com",
  messagingSenderId: "739727954574",
  appId: "1:739727954574:web:f8cbb0936ad5553c042fdf",
  measurementId: "G-8P3MWCMKMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
