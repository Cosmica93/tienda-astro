// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5JL7BvTBwQsTbY1PgUkPiUVoNFtqkIAs",
    authDomain: "tienda-astro.firebaseapp.com",
    projectId: "tienda-astro",
    storageBucket: "tienda-astro.appspot.com",
    messagingSenderId: "367260567109",
    appId: "1:367260567109:web:18e91ac6019c91dcc9852c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//creamos instancia de bd

export const bd = getFirestore(app);