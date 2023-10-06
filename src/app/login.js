import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { mensajes } from "./mensajes.js";

const formLogin = document.querySelector('#formLogin');

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = formLogin['lemail'].value;
    const password = formLogin['lpassword'].value;

    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        const modalr = document.querySelector("#loginModal");
        const modalx = bootstrap.Modal.getInstance(modalr);
        modalx.hide();
        mensajes("Bienvenido " + user.user.email, "success");
    } catch (error) {
        mensajes(error);
    }
});