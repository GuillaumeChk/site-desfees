// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB9OjRl9c6XYdLMr5as2AHzifpO9yghOOg",
	authDomain: "desfees-booking.firebaseapp.com",
	projectId: "desfees-booking",
	storageBucket: "desfees-booking.appspot.com",
	messagingSenderId: "1008353152471",
	appId: "1:1008353152471:web:61d32675930fe78dc80f92",
	measurementId: "G-4MQ3CY3Q5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// access db anywhere in this app
export { db };
