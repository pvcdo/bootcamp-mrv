using System;
using ExemploPOO.Models;

namespace ExemploPOO
{
    class Program
    {
        static void Main(String[] args)
        {
            Pessoa p1 = new Pessoa();

            p1.Nome = "Paulo";
            p1.Idade = 29;
            p1.Apresentar();
        }
    }
}
