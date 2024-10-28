// Importerer funktioner til at initialisere Firebase og få Firestore-databasen.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase konfiguration, der indeholder nøgler til projektet.
const firebaseConfig = {
  apiKey: "AIzaSyDpvTQv4Ub9B2TEQ_KhV-jyPyqGtt7LbSo",
  authDomain: "forum-6bfe4.firebaseapp.com",
  projectId: "forum-6bfe4",
  storageBucket: "forum-6bfe4.appspot.com",
  messagingSenderId: "2634969389",
  appId: "1:2634969389:web:d3a40cf72d46bb4c29a3a4"
};

// Initialiserer Firebase og Firestore.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };
