namespace ExemploConstrutores.Models
{
    public class Pessoa
    {
        private string Nome;
        private string Sobrenome;
        public Pessoa(string nome, string sobrenome)
        {
            this.Nome = nome;
            this.Sobrenome = sobrenome;
        }

        public void Apresentar()
        {
            System.Console.WriteLine($"Olá, meu nome completo é {Nome} {Sobrenome}.");
        }
    }
}