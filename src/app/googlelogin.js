import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { mensajes } from "./mensajes.js";

const googlebutton = document.querySelector('#google');
const formLogin = document.querySelector('#formLogin');

googlebutton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
        const user = await signInWithPopup(auth, provider);    
        console.log(user);
        const modalr = document.querySelector("#loginModal");
        const modalx = bootstrap.Modal.getInstance(modalr);
        modalx.hide();
        mensajes("Bienvenido " + user.user.email, "success");
    } catch (error) {
        console.log(error);
        mensajes(error);
    }
})