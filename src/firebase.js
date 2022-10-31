// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAThAaRQC-W7879wjMDJoA9cUDIxHulVGQ",
  authDomain: "casacruzreact.firebaseapp.com",
  projectId: "casacruzreact",
  storageBucket: "casacruzreact.appspot.com",
  messagingSenderId: "602069759566",
  appId: "1:602069759566:web:cbe5b9ff6a103ce901b51f",
  measurementId: "G-J4NMC55677"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)