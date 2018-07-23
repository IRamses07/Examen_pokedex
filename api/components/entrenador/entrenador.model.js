'use strict';
let mongoose = require('mongoose');

let trainerSchema = new mongoose.Schema({
    trainer_id: {type: Number, required: true},
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    sexo: {type: String, required: true},
    foto: {type: String},
    pokemon: [{
        pokedex_id: {type: Number, required: true},
        nombre: {type: String, required: true},
    }]
});

module.exports = mongoose.model('Trainer', trainerSchema);