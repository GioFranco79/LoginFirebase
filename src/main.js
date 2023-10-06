import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from './app/firebase.js';
import { loginChek } from './app/chequeo.js';
import './app/registro.js';
import './app/salir.js';
import './app/login.js';
import './app/googlelogin.js'
import './app/clima.js';

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginChek(user);
    } else {
        loginChek(user);
    }
})