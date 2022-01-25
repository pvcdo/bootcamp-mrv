using System;
using ExemploConstrutores.Models;

namespace ExemploConstrutores
{
    class Program
    {
        static void Main(string[] args)
        {
            Pessoa p1 = new Pessoa("Paulo Victor", "Caetano de Oliveira");
            p1.Apresentar();
        }
    }
}
