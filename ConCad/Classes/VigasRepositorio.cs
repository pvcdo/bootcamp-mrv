using System;
using ConCad.Vigas.Interfaces;

namespace ConCad.Vigas
{
    public class VigasRepositorio : IRepositorioViga<Viga>
    {
        private List<Viga> vigas = new List<Viga>();

        public bool ExisteViga(string nomeViga)
        {
            bool existe = false;

            foreach (var viga in vigas)
            {
                if(viga.getNomeViga() == nomeViga)
                {
                    existe = true;
                }
            }

            return existe;
        }
        public List<Viga> ListarVigas()
        {
            return vigas;
        }

        public void InserirViga(Viga viga)
        {
            vigas.Add(viga);
        }

        public void VisualizarViga(string nomeViga)
        {
            bool existe = false;

            foreach (var viga in vigas)
            {
                if(viga.getNomeViga() == nomeViga)
                {
                    System.Console.WriteLine(viga.ToString());
                    existe = true;
                }
            }

            if(!existe){System.Console.WriteLine("Viga não existente");}

            /*if(ExisteViga(nomeViga))
            {
                System.Console.WriteLine(viga.ToString());
            }
            else
            {
                System.Console.WriteLine("Viga não existente");
            }*/
        }

        public bool AtualizarViga(string nomeViga, Viga novaViga)
        {
            int cont = 0;

            foreach (var viga in vigas)
            {
                if(viga.getNomeViga() == nomeViga)
                {
                    vigas[cont] = novaViga;
                    return true;
                }

                cont++;
    
            }
            //controle para ver se a viga procurada existe
            return false;
        }

        public void ExcluirViga(string nomeViga)
        {
            foreach (var viga in vigas)
            {
                if(viga.getNomeViga() == nomeViga)
                {
                    viga.ExcluirViga();
                }
            }
        }

        public int ProximoId()
        {
            return vigas.Count;
        }
    }
}