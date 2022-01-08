/*Temos que criar o banco de dados primeiro*/

CREATE TABLE Produtos(
    Codigo_Produto int NOT NULL,
    Descricao varchar(50) NOT NULL,
    Data_Validade datetime,
    EAN varchar(15) NOT NULL,
    Ind_Inativo int NOT NULL DEFAULT 0
)
;
ALTER TABLE Produtos
    ADD CONSTRAINT PK_Produtos
    PRIMARY KEY (Codigo_Produto)
;
CREATE INDEX IDX_Produtos_EAN
    ON Produtos(EAN)
;
INSERT INTO Produtos VALUES (1,'Nome do produto',getdate(),'1234567890',0) /*nesse caso temos que colocar todos os campos, porque é exigido com esta sintaxe de insert*/
;
INSERT INTO Produtos(Codigo_Produto,Descricao,EAN) VALUES (2,'Nome do produto 2','1234567890')/*o dado inserido terá o campo Ind_Inativo com valor = 0*/
;
UPDATE 
	Produtos 
SET 
	Descricao = 'Camiseta Osklen'
WHERE
	Codigo_Produto = 1
;
UPDATE 
	Produtos 
SET 
	Descricao = 'Oculos Oakley'
WHERE
	Codigo_Produto = 2
;
SELECT * 
FROM Produtos 
WHERE Descricao LIKE '%Produto'
/*este código vai retornar só um campo, pois exige que o campo descrição seja uma string que termine com a palavra Produto*/
;
SELECT count(*) as Total
FROM Produtos
/*count é uma função de agregação, neste caso ele seleciona quantos produtos tem e retorna uma coluna chamada Total com essa quantidade.*/
;
CREATE TABLE Lojas(
    Codigo_Loja int NOT NULL,
    Nome varchar(50) NOT NULL,
    Ind_Inativo int NOT NULL DEFAULT 0,
    CONSTRAINT PK_Loja PRIMARY KEY(Codigo_Loja)
)
/*aqui vemos outra forma de criar uma primary key: já fazendo sua definição na criação da tabela*/
;
INSERT INTO Lojas(Codigo_Loja,Nome) VALUES (1000,'BH');
INSERT INTO Lojas(Codigo_Loja,Nome) VALUES (1001,'SP');
INSERT INTO Lojas(Codigo_Loja,Nome) VALUES (1002,'RJ');

SELECT * FROM Lojas

CREATE TABLE Estoque(
    Codigo_Produto int NOT NULL,
    Codigo_Loja int NOT NULL,
    Qtd float NOT NULL DEFAULT 0,
    CONSTRAINT PK_Estoque PRIMARY KEY(Codigo_Produto,Codigo_Loja)
)
;

INSERT INTO Estoque VALUES (99,10,1)
/*Desse jeito até iria persistir os dados na tabela, mas não faz sentido, uma vez que não há produto 99 nem loja 10. Para consertar isso temos que criar chaves estrangeiras ligando os códigos de produto e loja às primary keys correspondentes.*/
;
DELETE FROM Estoque
;
ALTER TABLE Estoque 
ADD CONSTRAINT FK_Codigo_Produto 
FOREIGN KEY (Codigo_Produto) 
REFERENCES Produtos (Codigo_Produto)
;
ALTER TABLE Estoque 
ADD CONSTRAINT FK_Codigo_Loja
FOREIGN KEY (Codigo_Loja) 
REFERENCES Lojas (Codigo_Loja)
;
/*A partir daqui, os dados passados para a inserção em Estoque tem que referenciar os códigos que existem em Produtos e Lojas.*/
INSERT INTO Estoque VALUES (1,1000,100);
INSERT INTO Estoque VALUES (1,1001,86);
INSERT INTO Estoque VALUES (2,1002,23);
INSERT INTO Estoque VALUES (1,1002,44);

SELECT 
    L.Nome,
    P.Descricao,
    E.Qtd
FROM
    Estoque E INNER JOIN Lojas L
ON
    E.Codigo_Loja = L.Codigo_Loja
INNER JOIN
    Produtos P
ON
    E.Codigo_Produto = P.Codigo_Produto
