
setLocalPokemon();
document.querySelector('#sltTipos').addEventListener('change', listadoPokemones);
document.querySelector('#nptFiltro').addEventListener('keyup', listadoPokemones);

let listaPokemon = getLocalPokemon();
let aTipos = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];
for (let i = 0; i < aTipos.length; i++) {
    let newOption = document.createElement('option');
    newOption.value = aTipos[i];
    newOption.innerHTML = aTipos[i];
    document.querySelector('#sltTipos').appendChild(newOption);
}
listadoPokemones();

function listadoPokemones() {

    let pokemonesFiltrados = [];

    /*let tbody = document.querySelector('#tblPokemones tbody');
    tbody.innerHTML = '';*/

    for (let i = 0; i < listaPokemon.length; i++) {
        if (document.querySelector('#sltTipos').value != "" && document.querySelector('#nptFiltro').value != "") {
            if (((listaPokemon[i]['tipo1'].toLowerCase().includes(document.querySelector('#sltTipos').value.toLowerCase())) ||
                (listaPokemon[i]['tipo2'].toLowerCase().includes(document.querySelector('#sltTipos').value.toLowerCase()))) &&
                (listaPokemon[i]['nombre'].toLowerCase().includes(document.querySelector('#nptFiltro').value.toLowerCase()))) {
                pokemonesFiltrados.push(listaPokemon[i]);
            }
        } else {

            if ((listaPokemon[i]['tipo1'].toLowerCase().includes(document.querySelector('#sltTipos').value.toLowerCase()) && document.querySelector('#sltTipos').value != "") ||
                (listaPokemon[i]['tipo2'].toLowerCase().includes(document.querySelector('#sltTipos').value.toLowerCase()) && document.querySelector('#sltTipos').value != "") ||
                (listaPokemon[i]['nombre'].toLowerCase().includes(document.querySelector('#nptFiltro').value.toLowerCase()) && document.querySelector('#nptFiltro').value != "")) {
                pokemonesFiltrados.push(listaPokemon[i]);
            }
        }
        if (document.querySelector('#nptFiltro').value == "" && document.querySelector('#sltTipos').value == "") {
            pokemonesFiltrados.push(listaPokemon[i]);

        }
    }
    /*for (let i = 0; i < pokemonesFiltrados.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = pokemonesFiltrados[i]['pokedex_id'];
        fila.insertCell().innerHTML = pokemonesFiltrados[i]['nombre'];
        if (pokemonesFiltrados[i]['tipo2'] == "") {
            fila.insertCell().innerHTML = pokemonesFiltrados[i]['tipo1'];
        } else {
            fila.insertCell().innerHTML = pokemonesFiltrados[i]['tipo1'] + " " + pokemonesFiltrados[i]['tipo2'];
        }
    }*/
    
    let mainContainer = document.getElementById('mainContainer');
    mainContainer.innerHTML = "";
    for (let i = 0; i < pokemonesFiltrados.length; i++) {
        newDataContainer = document.createElement('div');
        newDataContainer.classList.add("newDataContainer");

        nameBox = document.createElement('div');
        nameBox.classList.add('nameBox');
        nameBox.innerHTML = pokemonesFiltrados[i]['nombre'];
        
        newDataContainer.appendChild(nameBox);

        photoContainer = document.createElement('div');
        photoContainer.id = 'photoContainer';

        newImg = document.createElement('img');
        newImg.classList.add('imgPhoto');
        newImg.src = pokemonesFiltrados[i]['foto']; 

        showInfo = document.createElement('div');

        numeroPokedex = document.createElement('label');
        numeroPokedex.innerHTML = "Número de pokedex: " + pokemonesFiltrados[i]['pokedex_id'];
        numeroPokedex.classList.add("lblInfo");

        tipo = document.createElement('label');
        if (pokemonesFiltrados[i]['tipo2'] == "") {
            tipo.innerHTML = pokemonesFiltrados[i]['tipo1'];
            tipo.classList.add("lblInfo");
        } else {
            tipo.innerHTML ="Tipo: " + pokemonesFiltrados[i]['tipo1'] + " / " + pokemonesFiltrados[i]['tipo2'];
            tipo.classList.add("lblInfo");
        }

        photoContainer.appendChild(newImg);
        newDataContainer.appendChild(photoContainer);
        newDataContainer.appendChild(showInfo);
        showInfo.appendChild(numeroPokedex);
        showInfo.appendChild(tipo);
        mainContainer.appendChild(newDataContainer);

    }

}




