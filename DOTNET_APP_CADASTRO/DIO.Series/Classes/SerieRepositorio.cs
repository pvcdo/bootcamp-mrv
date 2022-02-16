using DIO.Series.Interfaces;

namespace DIO.Series
{
    public class SerieRepositorio : IRepositorio<Serie>
    {
        private List<Serie> listaSeries = new List<Serie>();
        public List<Serie> Lista()
        {
            return listaSeries;
        } 
        public void Insere(Serie serie)
        {
            listaSeries.Add(serie);
        }
        public Serie RetornaPorId(int id)
        {
            return listaSeries[id];
        }
        public void Exclui(int id)
        {
            listaSeries[id].setExcluido();
        }       
        public void Atualiza(int id, Serie serie)
        {
            listaSeries[id] = serie;
        }
        public int ProximoId()
        {
            return listaSeries.Count;
        }
    }
}