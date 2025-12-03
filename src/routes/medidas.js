var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/kpis", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/grafico", function (req, res) {
    medidaController.buscarGraficoIgual(req, res);
})

router.get("/kpis/:idFilmes", function (req, res) {
    medidaController.buscarUltimasMedidasEspeficico(req, res);
})

router.get("/grafico/:idFilmes", function (req, res) {
    medidaController.buscarGraficoDiferente(req, res);
})

module.exports = router;