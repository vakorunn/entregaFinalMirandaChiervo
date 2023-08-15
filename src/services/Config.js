//import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "bellezaoculta.firebaseapp.com",
  projectId: "bellezaoculta",
  storageBucket: "bellezaoculta.appspot.com",
  messagingSenderId: "797144988902",
  appId: "1:797144988902:web:3a2a8835321aadea34cf27",
  measurementId: "G-29FSYQYK23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);