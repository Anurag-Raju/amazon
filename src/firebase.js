// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOqCiMZrvPnI4xlvkCz4RCyX2zd_Bfeno",
  authDomain: "fir-3ba8a.firebaseapp.com",
  projectId: "fir-3ba8a",
  storageBucket: "fir-3ba8a.appspot.com",
  messagingSenderId: "633568393633",
  appId: "1:633568393633:web:a6095e7a12508b450e33e0",
  measurementId: "G-4RGTBBPLMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;
