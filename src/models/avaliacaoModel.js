var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT
	a.idAvaliacoes,
    a.tituloComentario,
    a.comentario,
    a.nota,
    a.fkUsuario,
    u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    a.fkFilmes,
    f.idFilmes,
    f.titulo,
    f.ano_lancamento,
    f.trilogia
from avaliacoes as a
	join usuario u
		on a.fkUsuario = u.idUsuario
	join filmes as f
		on a.fkFilmes = f.idFilmes;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarComentario(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
       SELECT
	a.idAvaliacoes,
    a.tituloComentario,
    a.comentario,
    a.nota,
    a.fkUsuario,
    u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    a.fkFilmes,
    f.idFilmes,
    f.titulo,
    f.ano_lancamento,
    f.trilogia
from avaliacoes as a
	join usuario u
		on a.fkUsuario = u.idUsuario
	join filmes as f
		on a.fkFilmes = f.idFilmes
        WHERE a.comentario LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT
	a.idAvaliacoes,
    a.tituloComentario,
    a.comentario,
    a.nota,
    a.fkUsuario,
    u.idUsuario,
    u.nome,
    u.email,
    u.senha,
    a.fkFilmes,
    f.idFilmes,
    f.titulo,
    f.ano_lancamento,
    f.trilogia
from avaliacoes as a
	join usuario u
		on a.fkUsuario = u.idUsuario
	join filmes as f
		on a.fkFilmes = f.idFilmes
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(idAvaliacoes, tituloComentario, comentario, fkUsuario, nota, fkFilmes) {
    console.log("ACESSEI O AVALIACOES MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", tituloComentario, comentario, fkUsuario, fkFilmes);
    var instrucaoSql = `
        INSERT INTO avaliacoes (idAvaliacoes, tituloComentario, comentario, fkUsuario, nota, fkFilmes) VALUES ('${idAvaliacoes}','${tituloComentario}', '${comentario}', ${fkUsuario}, '${nota}', '${fkFilmes}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoComentario, idAvaliacoes, fkFilmes, fkUsuario) {
    console.log("ACESSEI O Avaliacoes MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoComentario, idAvaliacoes, fkFilmes, fkUsuario);
    var instrucaoSql = `
        UPDATE avaliacoes SET comentario = '${novoComentario}' WHERE idAvaliacoes = ${idAvaliacoes} AND fkFilmes = ${fkFilmes} AND fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAvaliacoes, fkFilmes, fkUsuario) {
    console.log("ACESSEI O Avaliacoes MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAvaliacoes);
    var instrucaoSql = `
        DELETE FROM avaliacoes WHERE id = ${idAvaliacoes} AND fkFilmes = ${fkFilmes} AND fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarComentario,
    publicar,
    editar,
    deletar
}
