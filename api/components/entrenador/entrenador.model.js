'use strict';
let mongoose = require('mongoose');

let trainerSchema = new mongoose.Schema({
    trainer_id: {type: Number, required: true},
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    sexo: {type: String, required: true},
    foto: {type: String}

});

module.exports = mongoose.model('Trainer', trainerSchema);