// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz0QiOuMrmxL3WtcbHP9h-GGw76UOXqGw",
  authDomain: "bdnavidadliz.firebaseapp.com",
  projectId: "bdnavidadliz",
  storageBucket: "bdnavidadliz.firebasestorage.app",
  messagingSenderId: "236623520461",
  appId: "1:236623520461:web:ddba7ccaf72f97ef817f84",
  measurementId: "G-3M5RFV6ZPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, analytics, storage, db };