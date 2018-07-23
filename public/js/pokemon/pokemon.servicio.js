
function setPokemonData(pokedex, nombre, tipo1, tipo2, imagen) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            pokedex_id: pokedex,
            nombre: nombre,
            tipo1: tipo1,
            tipo2: tipo2,
            foto: imagen
        }
    });

    peticion.done(function (response) {
        console.log('Registro bien');
        respuesta = response;
    });

    peticion.fail(function (response) {
        console.log('Registro mal');
    });

    return respuesta;
}

function getPokemonData() {

    let respuesta = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_pokemon',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}

function cambiarFoto(imagenUrl) {
    let respuesta = '';

    if (getCurrentUserData()['rol'] == 'profesor') {
        ced = getCurrentUserData()['cedula'];
        id = getCurrentUserData()['_id'];
    } else {
        ced = getVerMasLS()['cedula'];
        id = getVerMasLS()['_id'];
    }

    let peticion = $.ajax({
        url: 'http://localhost:4000/api/cambiar_foto_profesores',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            cedula: ced,
            foto: imagenUrl
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}

function setLocalPokemon() {
    let listaPokemons = getPokemonData();
    localStorage.setItem('listaPokemonLS', JSON.stringify(listaPokemons));
}

function getLocalPokemon() {

    let listaPokemons = JSON.parse(localStorage.getItem('listaPokemonLS'));

    if (listaPokemons == null) {
        listaPokemons = localStorage.setItem('listaPokemonLS', JSON.stringify(getPokemonData()));;
    }
    return listaPokemons;
}

