
setLocalPokemon();

document.querySelector('#btnFiltro').addEventListener('click', listadoPokemones);

let listaPokemon = getLocalPokemon();
let aTipos = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Steel","Water"];
for(let i = 0;i<aTipos.length;i++){
let newOption = document.createElement('option');
newOption.value = aTipos[i];
newOption.appendChild('#sltTipos');
}
listadoPokemones();

function listadoPokemones() {

    let pokemonesFiltrados = [];

    let tbody = document.querySelector('#tblPokemones tbody');
    tbody.innerHTML = '';

    if (document.querySelector('#sltFiltro').) {
        let sFiltro = document.querySelector('#txtFiltro').value;

        for (let i = 0; i < listaPokemon.length; i++) {
            if (listaPokemon[i]['nombre1'].toLowerCase().includes(sFiltro.toLowerCase()) ||
                listaPokemon[i]['apellido1'].toLowerCase().includes(sFiltro.toLowerCase()) ||
                (listaPokemon[i]['nombre1'] + " " + listaPokemon[i]['apellido1']).toLowerCase().includes(sFiltro.toLowerCase())) {
                pokemonesFiltrados.push(listaPokemon[i]);
            }
        }
    } else {
        if (document.querySelector('#txtFiltro').value == '') {
            pokemonesFiltrados = getLocalPokemon();
        }
    }

    for (let i = 0; i < pokemonesFiltrados.length; i++) {
        let fila = tbody.insertRow();

        fila.insertCell().innerHTML = pokemonesFiltrados[i]['nombre1'] + " " + pokemonesFiltrados[i]['apellido1'];
        fila.insertCell().innerHTML = pokemonesFiltrados[i]['cedula'];
        fila.insertCell().innerHTML = pokemonesFiltrados[i]['correo'];


    }

}




