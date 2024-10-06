// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAisBbxcmzSzRgNDzxjMlsCzlOwDTiJVgs",
  authDomain: "capstonemockup.firebaseapp.com",
  projectId: "capstonemockup",
  storageBucket: "capstonemockup.appspot.com",
  messagingSenderId: "1055740878719",
  appId: "1:1055740878719:web:349c57f7a890cfa332444a",
  measurementId: "G-FHWS8JQ9TH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
