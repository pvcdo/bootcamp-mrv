using System.Collections.Generic;

namespace ConCad.Vigas.Interfaces
{
    public interface IRepositorioViga<T>
    {
         List<T> ListaVigas();
         void InserirViga();
         void AtualizarViga();
         void ExcluirViga();
    }
}