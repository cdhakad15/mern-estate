// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8024c.firebaseapp.com",
  projectId: "mern-estate-8024c",
  storageBucket: "mern-estate-8024c.appspot.com",
  messagingSenderId: "816876437783",
  appId: "1:816876437783:web:27e03898b3b30df9df3752",
  measurementId: "G-2VXPLEHNB5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
