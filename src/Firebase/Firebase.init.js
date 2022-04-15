// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOXHtvM9byToVBnpNOmAFmlBIrsUVbr88",
  authDomain: "react-auth-firebase-demo.firebaseapp.com",
  projectId: "react-auth-firebase-demo",
  storageBucket: "react-auth-firebase-demo.appspot.com",
  messagingSenderId: "1042897964689",
  appId: "1:1042897964689:web:481a5b7096771449f17930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;