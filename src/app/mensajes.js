export function mensajes(msj, tipo) {
    Toastify({
        text: msj,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: tipo === "success" ? "green" : "red",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}