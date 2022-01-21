using System;
using ExemploPOO.Interfaces;
using ExemploPOO.Models;

namespace ExemploPOO
{
    class Program
    {
        static void Main(String[] args)
        {
            ICalculadora calc = new Calculadora();
            System.Console.WriteLine(calc.Dividir(5,2));
        }
    }
}
