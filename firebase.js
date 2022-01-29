// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfcIGizrEqapyc8gcdlAK0QYke1cyUIes",
  authDomain: "nithinprasad-80ff7.firebaseapp.com",
  projectId: "nithinprasad-80ff7",
  storageBucket: "nithinprasad-80ff7.appspot.com",
  messagingSenderId: "543215432494",
  appId: "1:543215432494:web:ba403ce9409726777440bf",
  measurementId: "G-ZYBY6PKL0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);