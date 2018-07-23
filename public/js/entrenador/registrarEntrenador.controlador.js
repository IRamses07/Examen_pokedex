let aGetTrainerData = getTrainerData();

let aTrainerData = document.querySelectorAll("input");
document.querySelector('#btnRegistrarEntrenador').addEventListener('click', registrarEntrenador);


function registrarEntrenador() {

    let bError = false;
    if (validarRequeridos()) {
        swal({
            title: "Advertencia",
            text: "Por favor llene los campos en rojo.",
            icon: "warning",
            button: "Ok",
        });
    } else {

        if (!validarId(parseInt(aTrainerData[0].value))) {
            document.querySelector('#lblIdRError').classList.add('hide');
        } else {
            document.querySelector('#lblIdRError').classList.remove('hide');
            bError = true;
        }

        if(aTrainerData[0].validationMessage == "Debes introducir un número."){
            document.querySelector('#lblIdNError').classList.remove('hide');
            bError = true;
        }else{
            document.querySelector('#lblIdNError').classList.add('hide');
        }

        if(!validarId(parseInt(aTrainerData[0].value))&&!(aTrainerData[0].validationMessage == "Debes introducir un número.")){
            aTrainerData[0].classList.remove('error_input');
        }else{
            aTrainerData[0].classList.add('error_input');
            bError = true;
        }

        if (aTrainerData[2].value>15) {
            document.querySelector('#lblEdadError').classList.add('hide');
        } else {
            document.querySelector('#lblEdadError').classList.remove('hide');
            bError = true;
        }

        if(aTrainerData[2].value<80){
            document.querySelector('#lblEdad2Error').classList.add('hide');
        }else{
            document.querySelector('#lblEdad2Error').classList.remove('hide');
            bError = true;
        }

        if(aTrainerData[2].value>15 && aTrainerData[2].value<80){
            aTrainerData[2].classList.remove('error_input');
        }else{
            aTrainerData[2].classList.add('error_input');
            bError = true;
        }

        if (!bError) {
            swal({
                title: "Registro exitoso",
                text: "El Entrenador se ha registrado exitosamente.",
                icon: "success",
                button: "Ok",
            });

            setTrainerData(aTrainerData[0].value, aTrainerData[1].value, aTrainerData[2].value,
                 document.querySelector('#sltGenero').value, imagenUrl);
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

function validarId(pId) {

    let repetido = false;

    for (let i = 0; i < aGetTrainerData.length && !repetido; i++) {
        if (aGetTrainerData[i]['trainer_id'] == pId) {
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
    document.querySelector('#sltGenero').value = "";
    
}