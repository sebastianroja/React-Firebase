// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa1j1afnEBeAV70qQqZRy8_qQl4Mk7q18",
  authDomain: "primeraapp-2a3bc.firebaseapp.com",
  projectId: "primeraapp-2a3bc",
  storageBucket: "primeraapp-2a3bc.appspot.com",
  messagingSenderId: "79395901481",
  appId: "1:79395901481:web:5db6f4a32f93a377818c38"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;