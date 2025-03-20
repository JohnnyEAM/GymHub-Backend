
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZdECqRyF19X6v4SXOjzNkmLbdatQ1yvs",
    authDomain: "gymhub-contact-form.firebaseapp.com",
    projectId: "gymhub-contact-form",
    storageBucket: "gymhub-contact-form.firebasestorage.app",
    messagingSenderId: "662492445346",
    appId: "1:662492445346:web:507dcecd10050acf47f5fb",
    measurementId: "G-V1VT94GMJH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to view feedback
function viewFeedback() {
            window.open("https://console.firebase.google.com/u/0/project/gymhub-contact-form/firestore/databases/-default-/data/~2Ffeedback~2FUu1vyMuzehLCyFLVmJ5z?fb_gclid=Cj0KCQjw1um-BhDtARIsABjU5x7cBQmihgdqrnhEU7WtbzEtNoHnp7BVOpofX4R14nDNby5pH5IuLPMaApzwEALw_wcB");
        }
// Attach functions to global window object
window.viewFeedback = viewFeedback;
