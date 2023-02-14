// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7vDNQsJ63Zenz7biur0ALpWK7SV0CxLk",
  authDomain: "chatapp-381ee.firebaseapp.com",
  projectId: "chatapp-381ee",
  storageBucket: "chatapp-381ee.appspot.com",
  messagingSenderId: "475838585915",
  appId: "1:475838585915:web:4d2e5f1b3d0919fce2501e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()