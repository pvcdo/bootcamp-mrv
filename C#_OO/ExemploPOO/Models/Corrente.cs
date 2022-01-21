namespace ExemploPOO.Models
{
    public class Corrente : Conta
    {
        public override void Creditar(double credito){
            this.Saldo = this.Saldo + credito;
            this.ExibirSaldo(credito);
        }
    }
}