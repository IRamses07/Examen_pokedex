
function setTrainerData(trainer, name, age, gender, imagen) {
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

function setLocalTrainer() {
    let trainerList = getTrainerData();
    localStorage.setItem('trainerListLS', JSON.stringify(trainerList));
}

function getLocalTrainer() {

    let trainerList = JSON.parse(localStorage.getItem('trainerListLS'));

    if (trainerList == null) {
        trainerList = localStorage.setItem('trainerListLS', JSON.stringify(getLocalTrainer()));;
    }
    return trainerList;
}