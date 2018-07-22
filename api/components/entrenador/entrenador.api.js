'use strict';
const trainerModel = require('./entrenador.model');

module.exports.registrar = function (req, res) {

    let nuevoTrainer = new trainerModel({
        trainer_id: req.body.trainer_id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        sexo: req.body.sexo,
    });

    nuevoTrainer.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El usuario se registró con éxito'});
        }

    });

};

module.exports.listar = function (req, res) {
    trainerModel.find().then(
        function (trainer) {
            res.send(trainer);
        });
};