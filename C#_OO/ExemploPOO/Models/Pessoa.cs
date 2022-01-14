using System;
namespace ExemploPOO.Models
{
    public class Pessoa
    {
        public string? Nome; // a interrogação serve para indicar que a variável pode ter um valor nulo. Isso para não ficar aparecendo o warning fresco do .net
        public int Idade;

        public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome} e eu tenho {Idade} anos!");
        }

    }
}