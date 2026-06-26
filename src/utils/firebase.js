// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7tob_VMMQlPt_DMbgDoIcwLwXHphIHL8",
  authDomain: "kapda-dbf68.firebaseapp.com",
  projectId: "kapda-dbf68",
  storageBucket: "kapda-dbf68.firebasestorage.app",
  messagingSenderId: "353783717537",
  appId: "1:353783717537:web:818dae0b233f54d49a9ae0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompts: "select_account",
});
const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);
