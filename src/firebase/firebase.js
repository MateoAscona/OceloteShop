// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxSvX7FjU14YMCwp0-aEnoaFmuqikW25w",
  authDomain: "oceloteshop.firebaseapp.com",
  projectId: "oceloteshop",
  storageBucket: "oceloteshop.appspot.com",
  messagingSenderId: "455665646494",
  appId: "1:455665646494:web:429e112400156b255cf48f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);
