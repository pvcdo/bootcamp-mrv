/*query created to SQL Server*/

CREATE TABLE Planetas(
	IdPlaneta int NOT NULL,
	Nome varchar(50) NOT NULL,
	Rotacao float NOT NULL,
	Orbita float NOT NULL,
	Diametro float NOT NULL,
	Clima varchar(50) NOT NULL,
	Populacao int NOT NULL,
)
GO
ALTER TABLE Planetas ADD CONSTRAINT PK_Planetas PRIMARY KEY (IdPlaneta);
GO
CREATE TABLE Naves(
	IdNave int NOT NULL,
	Nome varchar(100) NOT NULL,
	Modelo varchar NOT NULL,
	Passageiros int NOT NULL,
	Carga float NOT NULL,
	Classe varchar(100) NOT NULL,
)
GO
ALTER TABLE Naves ADD CONSTRAINT PK_Naves PRIMARY KEY (IdNave);
GO
CREATE TABLE Pilotos(
	IdPiloto int NOT NULL,
	Nome varchar(50) NOT NULL,
	AnoNascimento varchar(50) NOT NULL,
	IdPlaneta int NOT NULL,
)
GO
ALTER TABLE Pilotos ADD CONSTRAINT PK_Pilotos PRIMARY KEY(IdPiloto);
GO
ALTER TABLE Pilotos ADD CONSTRAINT FK_Planeta FOREIGN KEY (IdPlaneta) REFERENCES Planetas (IdPlaneta);
GO
CREATE TABLE PilotosNaves(
	IdPiloto int NOT NULL,
	IdNave int NOT NULL,
	FlagAutorizado bit NOT NULL,
)
GO
ALTER TABLE PilotosNaves ADD CONSTRAINT PK_PilotosNaves PRIMARY KEY(IdPiloto, IdNave);
GO
ALTER TABLE PilotosNaves ADD CONSTRAINT DF_FlagAutorizado DEFAULT (1) FOR FlagAutorizado;
GO
CREATE TABLE HistoricoViagens(
	IdViagem int NOT NULL,
	IdNave int NOT NULL,
	IdPiloto int NOT NULL,
	DtSaida datetime NOT NULL,
	DtChegada datetime,
)
GO
ALTER TABLE HistoricoViagens ADD CONSTRAINT PK_HistoricoViagens PRIMARY KEY(IdViagem);
GO
ALTER TABLE HistoricoViagens ADD CONSTRAINT FK_HistoricoViagens FOREIGN KEY(IdPiloto, IdNave) REFERENCES PilotosNaves (IdPiloto,IdNave);