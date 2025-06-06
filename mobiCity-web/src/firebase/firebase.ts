import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSQ7pEPZOIzFUp5m2MVZrM2jFWbsOlpEw",
  authDomain: "mobicity-27fbc.firebaseapp.com",
  projectId: "mobicity-27fbc",
  storageBucket: "mobicity-27fbc.firebasestorage.app",
  messagingSenderId: "950345253833",
  appId: "1:950345253833:web:4018d213b7abd6dcdb1e18",
  measurementId: "G-ZGFGQZNP9W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
