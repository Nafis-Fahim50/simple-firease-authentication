// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWtMBXgCxS834Dawkn_MpzyaEtD_PMifc",
  authDomain: "simple-firebase-authenti-6d4f1.firebaseapp.com",
  projectId: "simple-firebase-authenti-6d4f1",
  storageBucket: "simple-firebase-authenti-6d4f1.appspot.com",
  messagingSenderId: "396825289690",
  appId: "1:396825289690:web:dc1ff7e743bf171da416e3",
  measurementId: "G-582BF32KMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;