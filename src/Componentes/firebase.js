// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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