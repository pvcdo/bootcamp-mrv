namespace ExemploPOO.Models
{
    public class Retangulo
    {
        private double Comprimento;
        private double Largura;
        public void DefinirMedidas(double Comprimento, double Largura){
            if(Comprimento <= 0 || Largura <= 0){
                System.Console.WriteLine("Gentileza passar apenas valores maiores que 0");
            }else{
                this.Comprimento = Comprimento;
                this.Largura = Largura;
            }
            
        }
        public double obterArea(){
            return this.Comprimento * this.Largura;
        }
    }
}