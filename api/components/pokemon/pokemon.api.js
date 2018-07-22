'use strict';
const pokemonModel = require('./pokemon.model');

module.exports.registrar = function (req, res) {

    let nuevoPokemon = new pokemonModel({
        pokedex_id: req.body.pokedex_id,
        nombre: req.body.nombre,
        tipo1: req.body.tipo1,
        tipo2: req.body.tipo2,
    });

    nuevoPokemon.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el usuario, ocurrió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El usuario se registró con éxito'});
        }

    });

};

module.exports.listar = function (req, res) {
    pokemonModel.find().then(
        function (pokemon) {
            res.send(pokemon);
        });
};

