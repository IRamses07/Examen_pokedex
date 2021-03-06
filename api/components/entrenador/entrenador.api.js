'use strict';
const trainerModel = require('./entrenador.model');

module.exports.registrar = function (req, res) {

    let nuevoTrainer = new trainerModel({
        trainer_id: req.body.trainer_id,
        nombre: req.body.nombre,
        edad: req.body.edad,
        sexo: req.body.sexo,
        foto: req.body.foto,
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

module.exports.asignar_pokemon = function (req, res) {

    trainerModel.update({
            _id: req.body._id
        }, {
            $push: {
                'pokemon': {
                    pokedex_id: req.body.pokedex_id,
                    nombre: req.body.nombre
                }
            }
        },
        function (error) {
            if (error) {
                res.json({
                    success: false,
                    msg: 'No se pudo Signar el proyecto, ocurrió el siguiente error' + error
                });
            } else {
                res.json({
                    success: true,
                    msg: 'El Proyecto se asignó con éxito'
                });
            }
        }
    )
};