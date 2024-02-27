// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwEmQH_HS52Fh0v0rr_Sca_b_W0fTI6qI",
  authDomain: "svelte-porto.firebaseapp.com",
  projectId: "svelte-porto",
  storageBucket: "svelte-porto.appspot.com",
  messagingSenderId: "322582306724",
  appId: "1:322582306724:web:5ea81582467298fbde6b31",
  measurementId: "G-8RWXPG85C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);