-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

use diario_jedi;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(60) not null,
email varchar(60) unique not null,
senha varchar(45) not null,
apelido varchar(45) unique not null
);

create table filmes (
idFilmes int primary key auto_increment,
titulo varchar (60) not null,
data_landamento date,
trilogia varchar(45)
);

create table visualizacoes (
idVisualizacoes int AUTO_INCREMENT,
fkFilmes int,
fkUsuario int,
	constraint fkFilmesVisualizacoes
		foreign key (fkFilmes) references filmes (idFilmes),
     constraint fkUsuarioVisualizacoes
		foreign key (fkUsuario) references usuario (idUsuario), 
primary key (idVisualizacoes, fkFilmes, fkUsuario),
data_visualizacao date,
qnt_reassistiu INT
);

create table avaliacoes (
idAvaliacoes int AUTO_INCREMENT,
fkFilmes int,
fkUsuario int,
	constraint fkFilmesAvaliacoes
		foreign key (fkFilmes) references filmes (idFilmes),
     constraint fkUsuarioAvaliacoes
		foreign key (fkUsuario) references usuario (idUsuario), 
primary key (idAvaliacoes, fkFilmes, fkUsuario),
nota int not null,
comentario varchar(300)
);