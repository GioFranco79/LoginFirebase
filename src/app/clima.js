const formClima = document.querySelector('#formClima');

const FaC = (f) => {
    const C = Math.round(f - 273.15);
    return C;
}

const llena = (dato) => {
    console.log(dato);
    const card = document.querySelector('#card-body');
    let html_str = '<h5 class="card-title">' + dato.name + '</h5>';
    html_str += '<p class="card-text"> Temperatura : ' + FaC(dato.main.temp) + ' C°</p>'
    html_str += '<p class="card-text"> Cielos      : ' + dato.weather[0].main + '</p>';
    html_str += '<p class="card-text"> Longitud    : [' + dato.coord.lon + '] </p>'; 
    html_str += '<p class="card-text"> Latitud  : [' + dato.coord.lat + '] </p>';
    html_str += '<p class="card-text"> Descripcion : ' + dato.weather[0].description + ' </p>';
    card.innerHTML = html_str;
}

const obtieneClima = (url) => {
    fetch(url)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error(response.status);
        })
        .then(data => {
            llena(data);
        })
        .catch(err => {
            console.error("ERROR: ", err.message)
        });
}

formClima.addEventListener('submit', async (e) => {
    e.preventDefault();
    const ciudad = formClima['ciudad'].value;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&&APPID=6bf9ba86fe81824d49aed40ca2e78c6c";
    console.log(ciudad);
    const modalr = document.querySelector("#climaModal");
    const modalx = bootstrap.Modal.getInstance(modalr);
    modalx.hide();
    obtieneClima(url);   
});

const carga = () => {
    const begin = "http://api.openweathermap.org/data/2.5/weather?q=Concepcion&&APPID=6bf9ba86fe81824d49aed40ca2e78c6c";
    obtieneClima(begin);
}

carga();