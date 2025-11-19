var avaliacaoModel = require("../models/avaliacaoModel");

function listar(req, res) {
    avaliacaoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avaliacaos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function publicar(req, res) {
    var fkFilme = req.body.fkFilme;
    var comentario = req.body.comentario;
    var fkUsuario = req.params.fkUsuario;

    if (fkFilme == undefined) {
        res.status(400).send("O Filme está indefinido!");
    } else if (comentario == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avaliacaoModel.publicar(fkFilme, fkUsuario, comentario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    var idAvaliacoes = req.params.idAvaliacoes;

    avaliacaoModel.deletar(idAvaliacoes)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    publicar,
    deletar
}