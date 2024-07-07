// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref as dbRef } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaVS6AOrmCQLdpEeKyO1mzbrpmNiurfb8",
  authDomain: "mental-health-chat-support.firebaseapp.com",
  projectId: "mental-health-chat-support",
  storageBucket: "mental-health-chat-support.appspot.com",
  messagingSenderId: "120720506664",
  appId: "1:120720506664:web:ca7829c38695dfd3ca9a1d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
const db = getFirestore(app);
const reference = dbRef;

export { auth, app, database, storage, db, reference };
