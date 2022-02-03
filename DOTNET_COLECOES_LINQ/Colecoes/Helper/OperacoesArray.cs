namespace Colecoes.Helper
{
    public class OperacoesArray
    {

        public void ImprimirArray(int[] array)
        {
            for (int i = 0; i < array.length; i++)
            {
                System.Console.WriteLine(array[i]);
            }        
        }

        public void OrdenarArray(ref int[] array)
        {
            int temp = 0;

            for (int i = 0; i < array.length; i++)
            {
                for (int j = 0; j < array.length-1; j++)
                {
                    if(array[j]>array[j+1])
                    {
                        temp = array[j+1];
                        array[j+1] = array[j];
                        array[j] = temp;
                    }
                }
            }
        }
      
        public bool Existe(int[] array, int valor)
        {
            return Array.Exists(array, elemento => elemento == valor);
        }

        public bool TodosMaioresQue(int[] array, int valor)
        {
            return Array.TrueForAll(array, e => e > valor);
        }
    }
}       
