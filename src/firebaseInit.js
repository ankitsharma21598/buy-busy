// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMT7jj4EXxX4K13_s_X9v3MlOdYgGov1g",
  authDomain: "buybusy-d1607.firebaseapp.com",
  projectId: "buybusy-d1607",
  storageBucket: "buybusy-d1607.appspot.com",
  messagingSenderId: "835693775697",
  appId: "1:835693775697:web:e9af4fb2a1b5ef3d5b6170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
