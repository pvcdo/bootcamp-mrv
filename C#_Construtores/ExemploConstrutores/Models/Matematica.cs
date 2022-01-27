namespace ExemploConstrutores.Models
{
    public class Matematica
    {
        private int X { get; set; }
        private int Y { get; set; }

        public Matematica(int x, int y)
        {
            X = x;
            Y = y;

            // Se inscrevendo em um evento
            // Acessa o evento EventoCalculadora da classe Calculadora e adiciona nele o método EventHandler da classe Matemática ao evento. Tudo iss no momento da instância do objeto
            Calculadora.EventoCalculadora += EventHandler;
        }

        public void Somar()
        {
            Calculadora.Somar(X, Y);
        }

        public void EventHandler() //serve para inscrever a classe em um evento
        {
            System.Console.WriteLine("Método executado");
        }
    }
}