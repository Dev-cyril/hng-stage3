// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmL9RK8sdUgF355tNXLenT50gtBacR93I",
  authDomain: "hng-stage3.firebaseapp.com",
  projectId: "hng-stage3",
  storageBucket: "hng-stage3.appspot.com",
  messagingSenderId: "945279627847",
  appId: "1:945279627847:web:b27b0f676eaf5dfb39b762",
  measurementId: "G-WY1XRPFN3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);