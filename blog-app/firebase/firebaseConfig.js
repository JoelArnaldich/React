// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAudY5Jks6vbsu1rWNvc2nQl4wIxTcskMo",
  authDomain: "blogapp-e7838.firebaseapp.com",
  projectId: "blogapp-e7838",
  storageBucket: "blogapp-e7838.firebasestorage.app",
  messagingSenderId: "1034634107068",
  appId: "1:1034634107068:web:acc823b84b1cc1144b18b9",
  measurementId: "G-7J512NMB8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);