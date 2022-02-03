using Colecoes.Helper;
using System;

namespace Colecoes
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] numeros = new int[]{1,9,6,2,4};

            OperacoesArray op = new OperacoesArray();

            //Verificando se todos os elementos são maiores que um valor
            int valor = 1;
            bool res = op.TodosMaioresQue(numeros,valor);
            System.Console.WriteLine(res);
            
            //Verificando se um item existe em um array
            
            // bool existe = op.Existe(numeros, 9);
            // System.Console.WriteLine(existe);

            //Array multidimensional

            // int[,] matriz = new int[4,2]
            // {
            //     {8,8},
            //     {10,20},
            //     {50,100},
            //     {90,200}
            // };

            // for (int linha = 0; linha < matriz.GetLength(0); linha++) //GetLength(0) pega o número de linhas do array multidimensional
            // {
            //    for (int coluna = 0; coluna < matriz.GetLength(1); coluna++)//GetLength(1) pega o número de colunas do array multidimensional
            //    {
            //        System.Console.WriteLine(matriz[linha,coluna]);
            //    }
            // }

            // int[] arrayInteiros = new int[3]{10,20,30};
            
            // System.Console.WriteLine("Percorrendo array com o for");
            // for (int i = 0; i < arrayInteiros.Length; i++)
            // {
            //     System.Console.WriteLine("i = " + i + " => " + arrayInteiros[i]);
            // }

            // System.Console.WriteLine("Percorrendo array com o forEach");
            // foreach (var valor in arrayInteiros)
            // {
            //     System.Console.WriteLine(valor);
            // }
        }
    }
}