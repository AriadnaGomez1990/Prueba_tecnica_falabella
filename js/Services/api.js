// Definición de la función asíncrona
async function getapiCharacter(url) {

    // Almacenamiento de respuesta
    const response = await fetch(url);

    // Almacenamiento de datos en forma de JSON
    var data = await response.json();
    if (response) {
        hideloaderCharacter();
    }
    showCharacter(data);
}
// Llamando a esa función asíncrona
getapiCharacter(enponint + apiCharacter);

// Función para ocultar el cargador.
function hideloaderCharacter() {
    document.getElementById('loadingCharacter').style.display = 'none';
}
// Función para definir innerHTML para la tabla HTML
function showCharacter(data) {
    let tab = ``;
    // Bucle para acceder a todas las filas 
    for (let r of data) {
        tab += `
<div class="col-md-2 mt-5">
    <div class="card" style="max-width: 120%">
        <img class="rounded-circle" alt="Responsive image" src="${r.image}" alt="${r.name}">
        <div class="card-body">
            <h5 class="card-title">Nombre: ${r.name}</h5>            
            <p class="card-text">Genero: ${r.gender}</p>
            <p class="card-text">Visto por ultima vez: ${r.location.name}</p>
            <p class="card-text">Estado: ${r.status}</p>
            <p class="card-text">Especie: ${r.species}</p>
        </div>
    </div>
</div>`;
    }
    // Configuración de innerHTML como variable de pestaña
    document.getElementById("character").innerHTML = tab;
}



// Definición de la función asíncrona
async function getapiEpisode(url) {

    // Almacenamiento de respuesta
    const response = await fetch(url);

    // Almacenamiento de datos en forma de JSON
    var data = await response.json();
    if (response) {
        hideloaderEpisode();
    }
    showEpisode(data);
}
// Llamando a esa función asíncrona
getapiEpisode(enponint + apiEpisode);

// Función para ocultar el cargador.
function hideloaderEpisode() {
    document.getElementById('loadingEpisode').style.display = 'none';
}
// Función para definir innerHTML para la tabla HTML
function showEpisode(data) {
    let tab = `<thead>
        <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Id Episodio</th>
            <th>Url Episodio</th>
            <th>Fecha de Creacion</th>
    </tr>
   </thead>
   <tfoot>
        <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Id Episodio</th>
            <th>Url Episodio</th>
            <th>Fecha de Creacion</th>
    </tr>
   </tfoot>
   `;
    // Bucle para acceder a todas las filas 
    for (let r of data.results) {
        tab += `
        <tr> 
            <td>${r.name}</td>
            <td>${r.air_date}</td>
            <td>${r.episode}</td> 
            <td>${r.url}</td>         
            <td>${r.created}</td>         
        </tr>
    `;
    }
    // Configuración de innerHTML como variable de pestaña
    document.getElementById("episode").innerHTML = tab;
}

async function getApiCountEpisode(url){
    const response = await fetch (url);
    var data = await response.json();
    if(response){
        hideloaderCountEpisode();
    }
    showCountEpisode(data);
}

getApiCountEpisode(enponint+apiEpisode);

function hideloaderCountEpisode(){
document.getElementById('loadingCountEpisode').style.display = 'none';
}

function showCountEpisode(data){
    document.getElementById('lblCountEpisode').innerText = data.info.count;
}


async function getApiCountCharacter(url){
    const response = await fetch (url);
    var data = await response.json();
    if(response){
        hideloaderCountCharacter();
    }
    showCountCharacter(data);
}

getApiCountCharacter(enponint+apiCharacterAll);

function hideloaderCountCharacter(){
document.getElementById('loadingCountCharacter').style.display = 'none';
}

function showCountCharacter(data){
    document.getElementById('lblCountcharacter').innerText = data.info.count;
}


async function getApiCountLocation(url){
    const response = await fetch (url);
    var data = await response.json();
    if(response){
        hideloaderCountLocation();
    }
    showCountLocation(data);
}

getApiCountLocation(enponint+apiLocationAll);

function hideloaderCountLocation(){
document.getElementById('loadingCountLocation').style.display = 'none';
}

function showCountLocation(data){
    document.getElementById('lblCountLocation').innerText = data.info.count;
}