// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzyWs-Q3udYoBvItHzTrk-wxnddgDp3hw",
  authDomain: "aone-40cd7.firebaseapp.com",
  projectId: "aone-40cd7",
  storageBucket: "aone-40cd7.firebasestorage.app",
  messagingSenderId: "695044242892",
  appId: "1:695044242892:web:067d06d0cac39d0adfb169",
  measurementId: "G-Y111H3XDJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);