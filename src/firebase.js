// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6V9UJ_3Np8I-fWaEWdqVSWfxGPK60rnU",
  authDomain: "resume-builder-bbbe4.firebaseapp.com",
  projectId: "resume-builder-bbbe4",
  storageBucket: "resume-builder-bbbe4.appspot.com",   // ✅ fix here
  messagingSenderId: "33357663459",
  appId: "1:33357663459:web:1321fe79cb3f46497549d6",
  measurementId: "G-5GTQZKSYNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth Providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
