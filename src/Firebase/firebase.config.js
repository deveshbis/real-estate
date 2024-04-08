// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmkLwKIXGhBgV4qW3Tf5kAr9z6CyMsdHs",
  authDomain: "dev-s-real-estate.firebaseapp.com",
  projectId: "dev-s-real-estate",
  storageBucket: "dev-s-real-estate.appspot.com",
  messagingSenderId: "237010809109",
  appId: "1:237010809109:web:5bf5f7fadfa647be78791c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;