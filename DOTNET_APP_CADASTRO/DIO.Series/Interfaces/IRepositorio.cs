using System.Collections.Generic;

namespace DIO.Series.Interfaces
{
    public interface IRepositorio<T>
    {
        List<T> Lista(); //método Lista retorna uma lista de items de classe T
        void Insere(T serie);
        T RetornaPorId(int id); //retorna um objeto de class        
        void Exclui(int id);        
        void Atualiza(int id, T serie);
        int ProximoId();
    }
}