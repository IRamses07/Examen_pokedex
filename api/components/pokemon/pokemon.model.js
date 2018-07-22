'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    pokedex_id: {type: Number, required: true},
    nombre: {type: String, required: true},
    tipo1: {type: String, required: true},
    tipo2: {type: String},

});

module.exports = mongoose.model('Pokemon', pokemonSchema);