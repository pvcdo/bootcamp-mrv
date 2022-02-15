namespace DIO.Series
{
    public class Serie : EntidadeBase
    {
        private Genero Genero {get; set;}
        private string Titulo {get;set;}
        private string Descricao {get;set;}
        private int Ano {get;set;}
        private bool Excluido {get;set;}
        
    }

    public Serie(int id, Genero genero, string titulo, string descricao, int ano)
    {
        this.id = id;
        this.Genero = genero;
        this.Titulo = titulo;
        this.Descricao = descricao;
        this.Ano = ano;
        this.Excluido = false;
    }

    public override string ToString()
    {
        //Enviroment.NewLine é uma forma de dar uma quebra de linha, sendo esse código padrão para qualquer tipo de ambiente de desenvolvimento, ou seja, não interessa se é linux ou windows, o Enviroment.NewLine vai converter para o seu SO.

        string retorno = "";
        retorno += "Gênero: " + this.Genero + Environment.NewLine;
        retorno += "Titulo: " + this.Titulo + Environment.NewLine;
        retorno += "Descrição: " + this.Descricao + Environment.NewLine;
        retorno += "Ano de Início: " + this.Ano + Environment.NewLine;
        retorno += "Excluido: " + this.Excluido;
        return retorno;
    }

    public string getTitulo()
    {
        return this.Titulo;
    }
    public string getId()
    {
        return this.Id;
    }
    public void setExcluido()
    {
        this.setExcluido = true;
    }
}