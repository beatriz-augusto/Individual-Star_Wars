var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

// router.get("/listar", function (req, res) {
//     avisoController.listar(req, res);
// });

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

// router.get("/pesquisar/:descricao", function (req, res) {
//     avisoController.pesquisarDescricao(req, res);
// });

// router.post("/publicar/:idUsuario", function (req, res) {
//     avisoController.publicar(req, res);
// });

// router.put("/editar/:idAviso", function (req, res) {
//     avisoController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//     avisoController.deletar(req, res);
// });

router.post("/publicar/:idUsuario", function (req, res) {
    avaliacaoController.publicar(req, res);
 });

 router.get("/listar/:idUsuario", function (req, res) {
    avaliacaoController.listarPorFilme(req, res);
});

router.delete("/deletar/:idAvaliacoes", function (req, res) {
    avaliacaoController.deletar(req, res);
 });

module.exports = router;