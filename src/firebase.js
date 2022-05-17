import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8dq9k0cMFCmi-m03naZBp-zpWQ9i_zA",
  authDomain: "twitter-clone-4afaf.firebaseapp.com",
  projectId: "twitter-clone-4afaf",
  storageBucket: "twitter-clone-4afaf.appspot.com",
  messagingSenderId: "465838876584",
  appId: "1:465838876584:web:164e7e09bff5556d391f9d",
  measurementId: "G-ST1HSJVH0C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
