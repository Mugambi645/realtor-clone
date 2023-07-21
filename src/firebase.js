// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM7rORLAoVw3ZOIkoouLJICb2t2eGmgTo",
  authDomain: "realtor-clone-react-a7dae.firebaseapp.com",
  projectId: "realtor-clone-react-a7dae",
  storageBucket: "realtor-clone-react-a7dae.appspot.com",
  messagingSenderId: "873111134489",
  appId: "1:873111134489:web:581ddfdc0c4e4f6ba5a588"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();