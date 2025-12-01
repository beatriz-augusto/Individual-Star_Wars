var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT
        kpiAvaliacoes.qntAvaliacoes,
        kpiAvaliacoes.media,
        kpiFilmes.titulo
            FROM 
            ( SELECT
        COUNT(idAvaliacoes) as qntAvaliacoes, 
        ROUND(AVG(nota), 1) as media
            FROM avaliacoes) as kpiAvaliacoes,
            ( SELECT 
        f.titulo
            FROM filmes f
        JOIN avaliacoes a ON a.fkFilmes = f.idFilmes
        GROUP BY f.idFilmes, f.titulo
        LIMIT 1 ) as kpiFilmes;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarGraficoIgual() {

    var instrucaoSql = `select 
	nota,
    count(nota) as qntAvaliacoes
from avaliacoes
GROUP BY nota
order by nota;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasEspeficico(idFilmes){
    var instrucaoSql = `SELECT 
    f.idFilmes
    f.titulo,
    COUNT(a.idAvaliacoes)      AS qntAvaliacoes,
    ROUND(AVG(a.nota), 1)      AS media
FROM filmes f
LEFT JOIN avaliacoes a 
    ON a.fkFilmes = f.idFilmes
WHERE f.idFilmes = ${idFilmes}
GROUP BY f.idFilmes, f.titulo;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarGraficoDiferente(idFilmes){
    var instrucaoSql = `select 
	nota,
    count(nota) as qntAvaliacoes
from avaliacoes
WHERE fkFilmes = ${idFilmes}
GROUP BY nota
order by nota;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarGraficoIgual,
    buscarUltimasMedidasEspeficico,
    buscarGraficoDiferente
}
