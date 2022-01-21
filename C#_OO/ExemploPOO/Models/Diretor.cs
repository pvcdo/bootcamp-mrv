namespace ExemploPOO.Models
{
    public class Diretor : Professor
    {
        public override void Apresentar(){
            System.Console.WriteLine($"Oi, eu sou o diretor {Nome} e ganho {Salario}");
        }
    }
}