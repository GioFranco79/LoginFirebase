import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { mensajes } from "./mensajes.js";

const formRegistro = document.querySelector("#formRegistro");

formRegistro.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = formRegistro['remail'].value;
    const password = formRegistro['rpassword'].value;

    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        const modalr = document.querySelector("#registrarModal");
        const modalx = bootstrap.Modal.getInstance(modalr);
        modalx.hide();
        mensajes("Bienvenido " + user.user.email, "success");
    } catch (error) {
        const msg = error.code;
        mensajes (msg);
    }    
});