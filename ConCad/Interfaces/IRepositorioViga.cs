using System.Collections.Generic;

namespace ConCad.Vigas.Interfaces
{
    public interface IRepositorioViga<T>
    {
         List<T> ListarVigas();
         void InserirViga(T viga);
         void VisualizarViga(string nomeViga);
         bool AtualizarViga(string nomeViga, T novaViga);
         void ExcluirViga(string nomeViga);
    }
}