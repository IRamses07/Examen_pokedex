'use strict';
const express = require('express');
const router = express.Router();
const trainer = require('./entrenador.api');


router.route('/registrar_trainer')
    .post(function (req, res) {
        trainer.registrar(req, res);
    });

router.route('/listar_trainer')
    .get(function (req, res) {
        trainer.listar(req, res);
    });

module.exports = router;