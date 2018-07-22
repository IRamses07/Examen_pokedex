
function setTrainerData(trainer, name, age, gender) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_trainer',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            trainer_id: trainer,
            nombre: name,
            edad: age,
            sexo: gender,
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

function getTrainerData() {

    let respuesta = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_trainer',
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