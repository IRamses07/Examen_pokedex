
setLocalTrainer();
document.querySelector('#nptFiltro').addEventListener('keyup', trainersList);
let trainerList = getLocalTrainer();
trainersList();

function trainersList() {

    let trainersFiltrados = [];

    let tbody = document.querySelector('#tblTrainers tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < trainerList.length; i++) {

        if ((trainerList[i]['nombre'].toLowerCase().includes(document.querySelector('#nptFiltro').value.toLowerCase()))) {
            trainersFiltrados.push(trainerList[i]);
        }
    }
    
    for (let i = 0; i < trainersFiltrados.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = trainersFiltrados[i]['trainer_id'];
        fila.insertCell().innerHTML = trainersFiltrados[i]['nombre'];
        fila.insertCell().innerHTML = trainersFiltrados[i]['edad'];
        fila.insertCell().innerHTML = trainersFiltrados[i]['sexo'];
    }
}


