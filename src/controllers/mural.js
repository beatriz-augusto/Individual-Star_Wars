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

// function listarPorUsuario(req, res) {
//     var idUsuario = req.params.idUsuario;

//     avaliacaoModel.listarPorUsuario(idUsuario)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log(
//                     "Houve um erro ao buscar os avaliacaos: ",
//                     erro.sqlMessage
//                 );
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function pesquisarDescricao(req, res) {
//     var descricao = req.params.descricao;

//     avaliacaoModel.pesquisarDescricao(descricao)
//         .then(
//             function (resultado) {
//                 if (resultado.length > 0) {
//                     res.status(200).json(resultado);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao buscar os avaliacaos: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avaliacaoModel.publicar(fkFilme, fkUsuario, Notification, comentario)
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

// function editar(req, res) {
//     var novaDescricao = req.body.descricao;
//     var idavaliacao = req.params.idavaliacao;

//     avaliacaoModel.editar(novaDescricao, idavaliacao)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );

// }

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
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}