namespace ExemploPOO.Models
{
    public class Aluno : Pessoa
    {
        public float Nota;

        public override void Apresentar(){
            Console.WriteLine($"Olá, meu nome é {Nome} e sou um aluno nota {Nota}!");
        }
        
    }
}