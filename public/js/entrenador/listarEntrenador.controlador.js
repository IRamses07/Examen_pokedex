
setLocalTrainer();
document.querySelector('#nptFiltro').addEventListener('keyup', trainersList);
let trainerList = getLocalTrainer();
trainersList();
let listaPokemon = getPokemonData();
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
        capturarButton.dataset.id = trainersFiltrados[i]['_id'];
        capturarButton.addEventListener('click', mostrarPokemons);

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

function mostrarPokemons() {
    trainerId = this.dataset.id;
    pokemonsPopUp.innerHTML = '';
    pokemonsPopUp = document.querySelector('#pokemonsPopUp');
    pokemonsPopUp.classList.remove('hide');

    spnTitle = document.createElement('span');
    spnTitle.innerHTML = "Seleccione los pokémones que desea capturar";
    spnTitle.classList.add('spnTitle');

    pokemonsPopUp.appendChild(spnTitle);

    for (let i = 0; i < getPokemonData().length; i++) {
        dataContainer = document.createElement('div');
        dataContainer.classList.add('dataContainer');

        checkPokemons = document.createElement('input');
        checkPokemons.type = "checkbox";
        checkPokemons.name = "pokemones";
        checkPokemons.value = listaPokemon[i]['pokedex_id'];

        lblPokemons = document.createElement('label');
        lblPokemons.innerHTML = getPokemonData()[i]['nombre'];
        dataContainer.appendChild(checkPokemons)
        dataContainer.appendChild(lblPokemons);
        pokemonsPopUp.appendChild(dataContainer);
    }

    btnClose = document.createElement('button');
    btnClose.type = "button";
    btnClose.innerHTML = "X";
    btnClose.classList.add('btnClose');
    btnClose.id = "btnClose";

    btnCapturar = document.createElement('button');
    btnCapturar.type = "button";
    btnCapturar.innerHTML = "Capturar";
    btnCapturar.classList.add('btnDesign');
    btnCapturar.classList.add('btnPopUp');
    btnCapturar.id = "btnCapturar";

    pokemonsPopUp.appendChild(btnCapturar);
    pokemonsPopUp.appendChild(btnClose);

    document.querySelector('#btnClose').addEventListener('click', function () { pokemonsPopUp.classList.add('hide') });
    document.querySelector('#btnCapturar').addEventListener('click', function () { agregarPokemon(trainerId) });

}

function agregarPokemon(trainerId) {

    let checkBoxes = document.querySelectorAll('input[name=pokemones]:checked');
    let misPokemones = [];
    for (let i = 0; i < checkBoxes.length; i++) {
        for (let j = 0; j < listaPokemon.length; j++) {
            if (checkBoxes[i].value == listaPokemon[j]['pokedex_id']) {
                misPokemones.push(listaPokemon[j]);
            }
        }
    }
    for (let i = 0; i < misPokemones.length; i++) {
        setPokemonsAdded(trainerId, misPokemones[i]['pokedex_id'], misPokemones[i]['nombre']);
    }
    pokemonsPopUp.classList.add('hide');
    swal({
        title: "Captura exitosa",
        text: "Has capturado los pokemones exitosamente.",
        icon: "success",
        button: "Ok",
    });
}


