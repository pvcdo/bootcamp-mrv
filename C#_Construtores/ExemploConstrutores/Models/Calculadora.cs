namespace ExemploConstrutores.Models
{
    public class Calculadora
    {
        // Delegate para ser usado no evento
        public delegate void DelegateCalculadora();

        // Evento
        public static event DelegateCalculadora EventoCalculadora;

        public static void Somar(int x, int y)
        {
            if (EventoCalculadora != null)
            {
                System.Console.WriteLine($"Adição: {x + y}");
                EventoCalculadora(); // o retorno desse evento é determinado pelo método que se inscreve nele, como no caso o evento EventHandler da Classe Matemática
            }
            else
            {
                System.Console.WriteLine("Nenhum inscrito");
            }
        }

        public static void Subtrair(int x, int y)
        {
            if (EventoCalculadora != null)
            {
                System.Console.WriteLine($"Subtração: {x - y}");
                EventoCalculadora();
            }
            else
            {
                System.Console.WriteLine("Nenhum inscrito");
            }
        }
    }
}