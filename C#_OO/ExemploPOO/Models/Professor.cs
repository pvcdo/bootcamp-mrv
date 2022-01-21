namespace ExemploPOO.Models
{
    public class Professor : Pessoa
    {
        public float Salario;

        public override void Apresentar(){
            Console.WriteLine($"Olá, meu nome é {Nome} e sou um professor com salário de {Salario}!");
        }
    }
}