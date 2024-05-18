import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
 
  apiKey: "AIzaSyCG8AElcocfs4zC1u-DkSYYK15bSPeD6gM",
  authDomain: "class-work-9829e.firebaseapp.com",
  projectId: "class-work-9829e",
  storageBucket: "class-work-9829e.appspot.com",
  messagingSenderId: "38208750084",
  appId: "1:38208750084:web:3c3031eeb337003873eb51",
  measurementId: "G-5JERZVB5KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO:Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth (app)

