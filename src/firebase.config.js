// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR7q1tzd7aFClct2AXRauP3SJttFHjaLc",
  authDomain: "upstore-7ca2f.firebaseapp.com",
  projectId: "upstore-7ca2f",
  storageBucket: "upstore-7ca2f.appspot.com",
  messagingSenderId: "727066476396",
  appId: "1:727066476396:web:a274595499b0a5c720bd49",
  measurementId: "G-68F6Z22CL4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
