// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';  // Para autenticación
import { getFirestore } from 'firebase/firestore';  // Para la base de datos
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1RS7duKvcvGzu1Vz6zfsRaxyBLG8uT6k",
  authDomain: "primerproyecto-b52a5.firebaseapp.com",
  projectId: "primerproyecto-b52a5",
  storageBucket: "primerproyecto-b52a5.firebasestorage.app",
  messagingSenderId: "179356341712",
  appId: "1:179356341712:web:a5998c00ea82db90d5d5d5",
  measurementId: "G-EFMZ4HTK13"
};

const app = initializeApp(firebaseConfig);

// Exportar los servicios de Firebase
const auth = getAuth(app);  // Servicio de autenticación
const db = getFirestore(app);  // Servicio de Firestore (base de datos)

// Exportar auth y db para que otros archivos puedan usarlos
export { auth, db };