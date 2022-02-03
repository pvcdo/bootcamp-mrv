namespace Colecoes.Helper
{
    public class OperacoesArray
    {
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