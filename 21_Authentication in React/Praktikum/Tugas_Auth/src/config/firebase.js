// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrJNeX-u39NpAolFO_hqCOHaQ-4re8Cq4",
  authDomain: "create-product-login.firebaseapp.com",
  projectId: "create-product-login",
  storageBucket: "create-product-login.appspot.com",
  messagingSenderId: "348372889667",
  appId: "1:348372889667:web:a350aea12571dddfcae4f6",
  measurementId: "G-VDNXMS2XGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
