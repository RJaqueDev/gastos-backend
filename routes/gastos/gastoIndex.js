const express = require("express");
const router = express.Router();
const gastosController = require("./gastoController");

// Debe ser gastosController.getGastos, no el objeto completo
router.get("/", gastosController.getGastos);

module.exports = router;
