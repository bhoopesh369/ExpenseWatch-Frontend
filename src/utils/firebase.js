// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSwImPqaTemflzlD9r15YdVRKRRhH-p0",
  authDomain: "expense-watch-36a19.firebaseapp.com",
  projectId: "expense-watch-36a19",
  storageBucket: "expense-watch-36a19.appspot.com",
  messagingSenderId: "711369953005",
  appId: "1:711369953005:web:e895f50d98a94c32c986e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }