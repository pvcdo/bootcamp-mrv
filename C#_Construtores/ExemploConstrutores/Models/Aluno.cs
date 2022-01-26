namespace ExemploConstrutores.Models
{
    public class Aluno : Pessoa
    {
        public Aluno(string nome, string sobrenome, string disciplina) : base(nome, sobrenome) //base faz referência à classe mãe
        {
            System.Console.WriteLine("Construtor classe aluno!");
        }
    }
}