// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;