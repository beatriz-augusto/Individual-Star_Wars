var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    medidaModel.buscarUltimasMedidas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar kpis gerais", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarGraficoIgual(req, res) {


    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarGraficoIgual().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar graficos gerais", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasEspeficico(req, res) {

    var idFilmes = req.params.idFilmes;

    console.log(`Buscando Kpis para o filme: `, idFilmes);

    medidaModel.buscarUltimasMedidasEspeficico(idFilmes).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar kpis filmes", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarGraficoDiferente(req, res) {

    var idFilmes = req.params.idFilmes;

    console.log(`Bucando grafico filmes: `, idFilmes);

    medidaModel.buscarGraficoDiferente(idFilmes).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar grafico dos filmes", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarGraficoIgual,
    buscarUltimasMedidasEspeficico,
    buscarGraficoDiferente
}