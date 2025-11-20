var express = require("express");
var router = express.Router();

var avaliacoesController = require("../controllers/avaliacaoController");

router.get("/listar", function (req, res) {
    avaliacoesController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avaliacoesController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:comentario", function (req, res) {
    avaliacoesController.pesquisarComentario(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avaliacoesController.publicar(req, res);
});

router.put("/editar/:idAvaliacoes", function (req, res) {
    avaliacoesController.editar(req, res);
});

router.delete("/deletar/:idAvaliacoes", function (req, res) {
    avaliacoesController.deletar(req, res);
});

module.exports = router;