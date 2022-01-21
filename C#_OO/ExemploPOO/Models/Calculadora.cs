using ExemploPOO.Interfaces;

namespace ExemploPOO.Models
{
    public class Calculadora : ICalculadora
    {
        public double Subtrair(double num1, double num2){
            return num1 - num2;
        }
        public double Somar (double num1, double num2){
            return num1 + num2;
        }

        public double Somar (double num1, double num2, double num3){
            return num1 + num2 + num3;
        }
    }
}