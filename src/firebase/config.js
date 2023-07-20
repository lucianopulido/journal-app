// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDylotWvJmcxmxeuHdZ3VpinbwNMdUPYgI",
	authDomain: "react-cursos-54c95.firebaseapp.com",
	projectId: "react-cursos-54c95",
	storageBucket: "react-cursos-54c95.appspot.com",
	messagingSenderId: "353209023861",
	appId: "1:353209023861:web:73e37b4259a2001ac8673c",
	measurementId: "G-4MX0DHNK5Y",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
