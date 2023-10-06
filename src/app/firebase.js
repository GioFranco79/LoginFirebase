import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChrTQZ9zKC_Znkrer0RIhWPzHhcyDnpds",
    authDomain: "ejemplocrud-862b1.firebaseapp.com",
    projectId: "ejemplocrud-862b1",
    storageBucket: "ejemplocrud-862b1.appspot.com",
    messagingSenderId: "899840506251",
    appId: "1:899840506251:web:1abbaeb393777bc591d78e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);