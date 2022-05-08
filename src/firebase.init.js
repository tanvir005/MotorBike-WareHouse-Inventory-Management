
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWSf36kMjbDCQYEhsPgbAP95zlmkOdZvI",
    authDomain: "warehouse-inventory-mana-7580c.firebaseapp.com",
    projectId: "warehouse-inventory-mana-7580c",
    storageBucket: "warehouse-inventory-mana-7580c.appspot.com",
    messagingSenderId: "711827829455",
    appId: "1:711827829455:web:ba6973ee85b234ed493dba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;