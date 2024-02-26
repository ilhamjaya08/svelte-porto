import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyAwEmQH_HS52Fh0v0rr_Sca_b_W0fTI6qI",
    authDomain: "svelte-porto.firebaseapp.com",
    projectId: "svelte-porto",
    storageBucket: "svelte-porto.appspot.com",
    messagingSenderId: "322582306724",
    appId: "1:322582306724:web:5ea81582467298fbde6b31",
    measurementId: "G-8RWXPG85C5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();