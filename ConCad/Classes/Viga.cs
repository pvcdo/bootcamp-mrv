using System;

namespace ConCad.Vigas
{
    public class Viga : VigasId
    {
        public Viga(
            int id,
            int [] dimensoes,
            double [] bitolas,
            int [] nArmacoes,
            List<string> apoios
            )
        {
            this.id = id;
            this.Dimensoes = dimensoes;
            this.Bitolas = bitolas;
            this.NArmacoes = nArmacoes;
            this.Apoios = apoios;
            this.Excluida = false;
            this.NomeViga = "V" + id;
        }

        private string NomeViga { get; set; }
        private int [] Dimensoes { get; set; }
        private double [] Bitolas { get; set; }
        private int [] NArmacoes { get; set; }
        private List<string> Apoios { get; set; }
        private bool Excluida { get; set; }

        public override string ToString()
        {
            string retornoApoios()
            {
                string retorno = "";
                int contagem = 0;
                foreach(var apoio in this.Apoios)
                {
                    if(contagem == 0)
                    {
                        retorno += apoio;
                    }
                    else
                    {
                        retorno += " - " + apoio;
                    }
                    contagem++;
                }
                return retorno;
            }

            string retorno = "";
            retorno += "Dimensões: " + this.Dimensoes[0] + "cm (L) " + this.Dimensoes[1] + "cm (A) " + this.Dimensoes[2] + "cm (C) " + Environment.NewLine;
            retorno += "Armação positiva: " + this.NArmacoes[0] + "ø" + this.Bitolas[0] + "mm" + Environment.NewLine;
            retorno += "Armação negativa: " + this.NArmacoes[1] + "ø" + this.Bitolas[1] + "mm" + Environment.NewLine;
            retorno += "Apoiada em " + retornoApoios() + Environment.NewLine;
            
            return retorno;
        }

        public double AreaTransversal()
        {
            return this.Dimensoes[0] * this.Dimensoes[1];
        }

        public double Volume()
        {
            return AreaTransversal() * this.Dimensoes[2];
        }

        public double AreaArmPos()
        {
            return this.NArmacoes[0] * this.Bitolas[0];
        }

        /*public double AlteraBitolaPos(double novaBitola)
        {
            this.Bitolas[0] = novaBitola;
        }*/

        public void ExcluirViga(){
            this.Excluida = true;
        }

        public bool VigaExcluida()
        {
            return this.Excluida;
        }

        public string getNomeViga()
        {
            return this.NomeViga;
        }
    }
}