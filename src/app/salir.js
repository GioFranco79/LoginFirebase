import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { mensajes } from "./mensajes.js";

const salir = document.querySelector("#salir");

salir.addEventListener('click', async () => {
    await signOut(auth);
    console.log('Saliendo.');
    mensajes("Desconectado exitosamente", "success");
});