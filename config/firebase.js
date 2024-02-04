// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUVMntbJiH6xj6eXId5dv-PVy1K630qgw",
  authDomain: "react-native-signup-5bb75.firebaseapp.com",
  projectId: "react-native-signup-5bb75",
  storageBucket: "react-native-signup-5bb75.appspot.com",
  messagingSenderId: "319112684131",
  appId: "1:319112684131:web:5d7502999888c88c4c8e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)