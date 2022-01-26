namespace ExemploConstrutores.Models
{
    public class Data
    {
        private int mes;
        private bool mesValido;

        public int GetMes()
        {
            return this.mes;
        }

        public void SetMes(int mes) 
        {
            if (mes > 0 && mes <= 12) //aqui nós estamos protegendo a variável mes colocando essa condicional
            {
                this.mes = mes;
                this.mesValido = true;
            }
        }

        public int Mes //essa é uma propriedade. No programa, ao darmos data.Mes nós temos a opção de igualar a algum valor, chamando portanto o set, ou então apenas dar o data.Mes e assim chamarmos o get.
        {
            get
            {
                return this.mes;
            }

            set
            {
                if (value > 0 && value <= 12)
                {
                    this.mes = value;
                    this.mesValido = true;
                }
            }
        }

        public void ApresentarMes()
        {
            if (this.mesValido)
            {
                System.Console.WriteLine(this.mes);
            }
            else
            {
                System.Console.WriteLine("Mês inválido");
            }
        }
    }
}