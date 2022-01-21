namespace ExemploPOO.Models
{
    public abstract class Conta
    {
        protected double Saldo;

        public abstract void Creditar(double credito);

        public void ExibirSaldo(){
            System.Console.WriteLine($"Seu saldo é de R$ {this.Saldo}");
        }

        public void ExibirSaldo(double credito){
            System.Console.WriteLine($"Você depositou R$ {credito} e seu saldo é de R$ {this.Saldo}");
        }
    }
}