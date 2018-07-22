let aPokemonData = getPokemonData();
eNumber = /[0-9]+/;
setSelects();
let aPokeData = document.querySelectorAll("input");
document.querySelector('#btnRegistrarPokemon').addEventListener('click', registrarPokemon);
function setSelects() {
    let aTipos = ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];
    for (let i = 0; i < aTipos.length; i++) {
        let newOption = document.createElement('option');
        newOption.value = aTipos[i];
        newOption.innerHTML = aTipos[i];
        let newOption2 = document.createElement('option');
        newOption2.value = aTipos[i];
        newOption2.innerHTML = aTipos[i];
        document.querySelector('#sltTipos1').appendChild(newOption);
        document.querySelector('#sltTipos2').appendChild(newOption2);
    }
}

function registrarPokemon() {

    
    let bError = false;
    if (validarRequeridos()) {
        swal({
            title: "Advertencia",
            text: "Por favor llene los campos en rojo.",
            icon: "warning",
            button: "Ok",
        });
    } else {

        if (!validarPokedex(parseInt(aPokeData[0].value))) {
            document.querySelector('#lblIdRError').classList.add('hide');
        } else {
            document.querySelector('#lblIdRError').classList.remove('hide');
            bError = true;
        }

        /*if (eNumber.test(aPokeData[0].value)) {
            document.querySelector('#lblIdNError').classList.add('hide');
        } else {

            document.querySelector('#lblIdNError').classList.remove('hide');
            bError = true;
        }*/

        if(aPokeData[0].validationMessage == "Debes introducir un número."){
            document.querySelector('#lblIdNError').classList.remove('hide');
            bError = true;
        }else{
            document.querySelector('#lblIdNError').classList.add('hide');
        }

        if (!validarPokedex(parseInt(aPokeData[0].value)) && eNumber.test(aPokeData[0].value)) {
            aPokeData[0].classList.remove('error_input');
        } else {
            aPokeData[0].classList.add('error_input');
        }

        if (!validarNombrePokemon(aPokeData[1].value)) {
            aPokeData[1].classList.remove('error_input');
            document.querySelector('#lblNombreRError').classList.add('hide');

        } else {
            aPokeData[1].classList.add('error_input');
            document.querySelector('#lblNombreRError').classList.remove('hide');
            bError = true;
        }

        //validar caracteres especiales...


        if (!bError) {
            swal({
                title: "Registro exitoso",
                text: "El pokémon se ha registrado exitosamente.",
                icon: "success",
                button: "Ok",
            });

            setPokemonData(aPokeData[0].value, aPokeData[1].value, document.querySelector('#sltTipos1').value, document.querySelector('#sltTipos2').value);
            limpiar();

        }
    }

}

function validarRequeridos() {

    let aRequeridos = document.querySelectorAll('[required]');
    let empty = false;

    for (let i = 1; i < aRequeridos.length; i++) {
        if (aRequeridos[i].value == '') {
            aRequeridos[i].classList.add('error_input');
            empty = true;
        } else {
            aRequeridos[i].classList.remove('error_input');
        }
    }
    if(aRequeridos[0].validationMessage == "" && aRequeridos[0].value == ''){
        aRequeridos[0].classList.add('error_input');
        empty = true;
    }else{
        aRequeridos[0].classList.remove('error_input');
    }
    return empty;
}

function validarPokedex(pIdPokedex) {


    let repetido = false;

    for (let i = 0; i < aPokemonData.length && !repetido; i++) {
        if (aPokemonData[i]['pokedex_id'] == pIdPokedex) {
            repetido = true;
        }
    }
    return repetido;
}

function validarNombrePokemon(pNombre) {
    let repetido = false;

    for (let i = 0; i < aPokemonData.length && !repetido; i++) {
        if (aPokemonData[i]['nombre'] == pNombre) {
            repetido = true;
        }
    }
    return repetido;

}

function limpiar() {
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    document.querySelector('#sltTipos1').outerHTML = '<select class="sltTipos" id="sltTipos1" required><option value="" hidden>-Seleccione el primer tipo-</option></select>';
    document.querySelector("#sltTipos2").outerHTML = '<select class="sltTipos" id="sltTipos2"><option value="" hidden>-Seleccione el segundo tipo-</option><option value= "">No disponible</option></select>';
    setSelects();
}