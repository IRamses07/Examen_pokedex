function setPokemonData(pInfoPokemon) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            pokedex_id: pInfoPokemon[0].value,
            nombre: pInfoPokemon[1].value,
            tipo1: pInfoPokemon[2].value,
            tipo2: pInfoPokemon[3].value,
            /*foto: 'http://res.cloudinary.com/dtz8agoc3/image/upload/v1531452055/perfil.png'*/ //cambiar
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