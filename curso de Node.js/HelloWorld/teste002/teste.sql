/*
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
*/

/* 

para se criar uma tabela utiliza-se o comando CREATE TABLE 'NOME'(
    CONFICURAÇÕES DA TABELA EX: nome VARCHAR(50) )


MOSTRAR TABELAS: 'SHOW TABLES'

MOSTRAR CONFIURAÇÕES DA TABELA: 'DESCRIBE
'
MOSTRAR TODOS OS DADOS DA TABELA: "SELECT" OBS: '*' SERVE PARA MOSTRAR TODOS OS DADOS DA TABELA.
    ex: SELECT * FROM usuarios;

PARA CONSULTA DE DADOS ESPECIFICOS  UTILIZA-SE WHERE
    EX: SELECT * FROM usuarios WHERE idade = 8;
    esse comando ira exibir na tela todos os usuarios da tabela que tem a idade igual a 8 anos.

DELETE: deleta dados dos usuarios. 
    Ex: DELETE FROM usuarios WHERE nome='Victor';

UPDATE: serve para atualizar dados na tabela EX UPDATE usuarios SET nome='Nome de Teste' 
    EX: UPDATE usuarios SET nome='JUNIOR' where nome = 'junior';

WHERE nome = 'Luis Silva';




*/

INSERT INTO usuarios(nome, email,idade) VALUES(
    "Junior",'juniorfv10@gmail.com',8
);

SELECT * FROM usuarios;