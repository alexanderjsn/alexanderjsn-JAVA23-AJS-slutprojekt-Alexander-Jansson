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
  apiKey: "AIzaSyCT7VEAScQrEfPGu1Dvnu6eaOXOVgHVjj4",
  authDomain: "jsscrum-b5919.firebaseapp.com",
  projectId: "jsscrum-b5919",
  storageBucket: "jsscrum-b5919.appspot.com",
  messagingSenderId: "680216465635",
  appId: "1:680216465635:web:bd83e4edf9db21c55fb5d6",
  measurementId: "G-HT4GNLBWLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
//databas
export const db = getFirestore(app);
