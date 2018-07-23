
setLocalTrainer();
document.querySelector('#nptFiltro').addEventListener('keyup', trainersList);
let trainerList = getLocalTrainer();
trainersList();

function trainersList() {

    let trainersFiltrados = [];

    /* let tbody = document.querySelector('#tblTrainers tbody');
     tbody.innerHTML = '';*/

    for (let i = 0; i < trainerList.length; i++) {

        if ((trainerList[i]['nombre'].toLowerCase().includes(document.querySelector('#nptFiltro').value.toLowerCase()))) {
            trainersFiltrados.push(trainerList[i]);
        }
    }

    /*for (let i = 0; i < trainersFiltrados.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = trainersFiltrados[i]['trainer_id'];
        fila.insertCell().innerHTML = trainersFiltrados[i]['nombre'];
        fila.insertCell().innerHTML = trainersFiltrados[i]['edad'];
        fila.insertCell().innerHTML = trainersFiltrados[i]['sexo'];
    }*/

    let mainContainer = document.getElementById('mainContainer');
    mainContainer.innerHTML = "";
    for (let i = 0; i < trainersFiltrados.length; i++) {
        newDataContainer = document.createElement('div');
        newDataContainer.classList.add("newDataContainer");

        nameBox = document.createElement('div');
        nameBox.classList.add('nameBox');
        nameBox.innerHTML = trainersFiltrados[i]['nombre'];

        newDataContainer.appendChild(nameBox);

        photoContainer = document.createElement('div');
        photoContainer.id = 'photoContainer';

        newImg = document.createElement('img');
        newImg.classList.add('imgPhoto');
        newImg.src = trainersFiltrados[i]['foto'];

        photoContainer.appendChild(newImg);
        newDataContainer.appendChild(photoContainer);

        showInfo = document.createElement('div');

        numeroEntrenador = document.createElement('label');
        numeroEntrenador.innerHTML = "Número de entrenador: " + trainersFiltrados[i]['trainer_id'];
        numeroEntrenador.classList.add("lblInfo");

        edad = document.createElement('label');
        edad.innerHTML = "Edad: " + trainersFiltrados[i]['edad'];
        edad.classList.add("lblInfo");

        sexo = document.createElement('label');
        sexo.innerHTML = "Sexo: " + trainersFiltrados[i]['sexo'];
        sexo.classList.add("lblInfo");

        infoButton = document.createElement('div');
        infoButton.id = "infoButton";

        capturarButton = document.createElement('button');
        capturarButton.type = "button";
        capturarButton.classList.add('btnDesign');
        capturarButton.classList.add('btnCard');
        capturarButton.innerHTML = "Capturar pokémon";
        /*capturarButton.addEventListener('click', mostrarEvaluacion)*/

        /*verPokemones = document.createElement('button');
        verPokemones.type = "button";
        verPokemones.innerHTML = "Ver pokemones";*/

        infoButton.appendChild(capturarButton);
        /*infoButton.appendChild(verPokemones);*/
        newDataContainer.appendChild(showInfo);
        showInfo.appendChild(numeroEntrenador);
        showInfo.appendChild(edad);
        showInfo.appendChild(sexo);
        newDataContainer.appendChild(infoButton);
        mainContainer.appendChild(newDataContainer);

    }
}


