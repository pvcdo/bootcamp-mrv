<h3 align="center">ConCad</h3>

Este repositório teve início como um projeto parte da minha trilha no bootcamp da MRV oferecido pela [DIO](https://www.dio.me/).

## Sobre o projeto

O objetivo inicial do projeto proposto pelo professor [Eliézer Zarpelão](https://www.linkedin.com/in/eliezerzarpelao/) era recriar o [exemplo dele](https://github.com/elizarp/dio-dotnet-poo-lab-2), onde eram cadastradas séries de televisão em um projeto de console em C# que eram armazenados em memória a partir de um List. Como é incentivada pela plataforma a produção de projetos de acordo com a nossa criatividade e dada minha formação em Engenharia Civil e intenção de juntar estes dois mundos, criei um sistema onde manipulamos dados de vigas de concreto.

A longo prazo este será um programa de cálculo de estruturas de concreto open-source. Como primeiro passo decidi inserir o módulo de vigas.

## Sobre a técnica

Foram criadas classes e uma interface para a execução do projeto.

### Classes

As classes criadas foram Viga, VigasId e VigasRepositorio. A classe Viga contem os parâmetros de construção dos objetos viga, além dos seus métodos. A classe VigasId é herdado pela Viga para que possa ser determinado o nome de cada viga criada. Já VigasRepositorio serve para a intermediação entre o console C# e o objeto.

### Interface

A interface existente é a IRepositorioViga. Ela determina quais são os métodos fundamentais a serem executados naquelas classes que a implementam. Estes métodos fundamentais se resumem a dar CRUD de vigas no repositório.

## Futuras implementações

- Módulo de lajes
- Módulo de pilares
- Estruturar CAD do programa
