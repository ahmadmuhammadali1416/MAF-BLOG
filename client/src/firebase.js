// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa1T0_ZHZJeHLD0u2W5YG2tE7rNPPwV9c",
  authDomain: "maf-blog-d8c3a.firebaseapp.com",
  projectId: "maf-blog-d8c3a",
  storageBucket: "maf-blog-d8c3a.firebasestorage.app",
  messagingSenderId: "958674150874",
  appId: "1:958674150874:web:e9642f42eac03de4d80ce3",
  measurementId: "G-ZHNTHHSGYS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);