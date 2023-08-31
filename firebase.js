// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgtjp2QI_Vs4rve3AKLUN7IDNVL1k0E3c",
  authDomain: "upstore-84b41.firebaseapp.com",
  projectId: "upstore-84b41",
  storageBucket: "upstore-84b41.appspot.com",
  messagingSenderId: "570130015090",
  appId: "1:570130015090:web:aa63e0352cd5ae44f2f3eb",
  measurementId: "G-R4CKR5SPB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);