let aPokemonData = getPokemonData();
eNumber = /[0-9]+/;

document.querySelector('#btnRegistrarPokemon').addEventListener('click', registrarPokemon);

function registrarPokemon() {

    let aPokeData = document.querySelectorAll("input");
let bError = false;
    if (validarRequeridos()) {
        swal({
            title: "Advertencia",
            text: "Por favor llene los campos en rojo.",
            icon: "warning",
            button: "Ok",
        });
    } else {
        /* for (let i = 0; i < listaProfes.length; i++) {*/
        /*if (!validarPokedex(aPokeData[0].value)) {
            aPokeData[0].classList.remove('error_input');
            documement.querySelector('#lblIdRError').classList.add('hide');
        } else {
            aPokeData[0].classList.add('error_input');
            documement.querySelector('#lblIdRError').remove('hide');
            bError = true;
        }*/

        if (eNumber.test(aPokeData[0].value)) {
            aPokeData[0].classList.remove('error_input');
            document.querySelector('#lblIdNError').classList.add('hide');

        } else {
            aPokeData[0].classList.add('error_input');
            document.querySelector('#lblIdNError').classList.remove('lblHide');
            bError = true;
        }

       /* if (!validarNombrePokemon(aPokeData[1].value)) {
            aPokeData[1].classList.remove('error_input');
            document.querySelector('#lblNombreRError').classList.add('hide');

        } else {
            aPokeData[1].classList.add('error_input');
            document.querySelector('#lblNombreRError').classList.remove('hide');
            bError = true;
        }*/

        //validar caracteres especiales...


        if (!bError) {
            swal({
                title: "Registro exitoso",
                text: "El pokémon se ha registrado exitosamente.",
                icon: "success",
                button: "Ok",
            });

            setPokemonData(aPokeData);
            limpiar();
        }
    }

}

function validarRequeridos() {

    let aRequeridos = document.querySelectorAll('[required]');
    let empty = false;

    for (let i = 0; i < aRequeridos.length; i++) {
        if (aRequeridos[i].value == '') {
            aRequeridos[i].classList.add('error_input');
            empty = true;
        } else {
            aRequeridos[i].classList.remove('error_input');
        }
    }
    return empty;
}

function validarPokedex(pIdPokedex) {

    /*let aPokemonData = getPokemonData();*/
    let repetido = false;

    for (let i = 0; i < aPokemonData.length && !repetido; i++) {
        if (aPokemonData['pokedex_id'] == pIdPokedex) {
            repetido = true;
        }
    }
    return repetido;
}

function validarNombrePokemon(pNombre) {
    let repetido = false;

    for (let i = 0; i < aPokemonData.length && !repetido; i++) {
        if (aPokemonData['nombre'] == pNombre) {
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
}