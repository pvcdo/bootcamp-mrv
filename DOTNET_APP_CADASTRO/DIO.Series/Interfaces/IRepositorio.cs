using System.Collections.Generic;

namespace DIO.Series.Interfaces
{
    public interface IRepositorio<T> //para conseguir usar a classe genérica nós temos que recebê-la na chamada da interface
    {
        List<T> Lista(); //método Lista retorna uma lista de items de classe T, que é uma classe genérica vinda de System.Collections.Generic
        void Insere(T serie);
        T RetornaPorId(int id); //retorna um objeto de class        
        void Exclui(int id);        
        void Atualiza(int id, T serie);
        int ProximoId();
    }
}