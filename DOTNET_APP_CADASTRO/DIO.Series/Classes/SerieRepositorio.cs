using DIO.Series.Interfaces;

namespace DIO.Series.Classes
{
    public class SerieRepositorio : IRepositorio<Serie>
    {
        private List<Serie> listaSeries = new List<Serie>();
        public List<Serie> Lista()
        {
            return listaSeries;
        } 
        void Insere(Serie serie)
        {
            listaSeries.Add(serie);
        }
        Serie RetornaPorId(int id)
        {
            return listaSeries[id];
        }
        void Exclui(int id)
        {
            listaSeries[id].setExcluido();
        }       
        void Atualiza(int id, Serie serie)
        {
            listaSeries[id] = serie;
        }
        int ProximoId()
        {
            return listaSeries.Count;
        }
    }
}