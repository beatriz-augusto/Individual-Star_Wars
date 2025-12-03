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
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;


avaliacaoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarComentario(req, res) {
    var descricao = req.params.descricao;


avaliacaoModel.pesquisarComentario(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.body.idUsuario;
    var nota = req.body.nota;
    var fkFilmes = req.body.fkFilme;
    var idAvaliacoes = Number(Math.floor(Math.random() * 999) + 1)
    var tituloComentario = req.body.tituloComentario;
    console.log("Controller avaliações: " 
        + titulo + '/'+
        + descricao + '/'+
        + idUsuario + '/'+
        + nota + '/'+
        + fkFilmes + '/'+
        + idAvaliacoes + '/'
    )
    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else if (nota == undefined) {
        res.status(403).send("A nota está indefinido!");
    }else if (fkFilmes == undefined) {
        res.status(403).send("O filme está indefinido!");
    } else {
        var avaliacaoModel = require("../models/avaliacaoModel");
avaliacaoModel.publicar(idAvaliacoes, titulo, descricao, idUsuario, nota, fkFilmes)
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

function editar(req, res) {
    var novoComentario = req.body.comentario;
    var idAvaliacoes = req.params.idAvaliacoes;


avaliacaoModel.editar(novoComentario, idAvaliacoes)
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
    listarPorUsuario,
    pesquisarComentario,
    publicar,
    editar,
    deletar
}

