using System;

namespace ConCad.Vigas
{
    class Program
    {
        static VigasRepositorio repositorio = new VigasRepositorio();
        static void Main(string[] args)
        {
            string opcaoUsuario = MenuPrincipal();

			while (opcaoUsuario.ToUpper() != "X")
			{
				switch (opcaoUsuario)
				{
					case "LS":
						ListarVigas();
						break;
					case "VG":
						InserirViga();
						break;
                    case "VZ":
						VisualizarViga("");
						break;
					case "UP":
						AtualizarViga();
						break;
					case "EX":
						ExcluirViga();
						break;
					case "CLS":
						System.Console.Clear();
						break;

					default:
						throw new ArgumentOutOfRangeException();
				}

				opcaoUsuario = MenuPrincipal();
			}

			System.Console.WriteLine("Obrigado por utilizar nossos serviços.");
        }

		private static Viga CriarViga()
		{
			System.Console.WriteLine("Largura (cm)");
			double dimensao_largura = double.Parse(Console.ReadLine()!);
			System.Console.WriteLine("Altura (cm)");
			double dimensao_altura = double.Parse(Console.ReadLine()!);
			System.Console.WriteLine("Comprimento (cm)");
			double dimensao_comprimento = double.Parse(Console.ReadLine()!);

			double[] arr_dimensoes = new double[3]{dimensao_largura,dimensao_altura,dimensao_comprimento};

			System.Console.WriteLine("Bitola positiva (mm)");
			double bitola_positiva = double.Parse(Console.ReadLine()!);
			System.Console.WriteLine("Bitola negativa (mm)");
			double bitola_negativa = double.Parse(Console.ReadLine()!);

			double[] arr_bitolas = new double[2]{bitola_positiva,bitola_negativa};

			System.Console.WriteLine("Qtd positiva");
			int qtd_positiva = int.Parse(Console.ReadLine()!);
			System.Console.WriteLine("Qtd negativa");
			int qtd_negativa = int.Parse(Console.ReadLine()!);

			int[] arr_qtd = new int[2]{qtd_positiva, qtd_negativa};
			
			System.Console.WriteLine("Especifique a quantidade de apoios:");
			int n_apoios = int.Parse(Console.ReadLine()!);

			List<string> apoios = new List<string>();

			int i = 1;

			while(i <= n_apoios)
			{
				System.Console.WriteLine("Escreva o nome do apoio " + i);
				string apoio = System.Console.ReadLine()!.ToUpper();
				apoios.Add(apoio);
				i++;
			}

			Viga novaViga = new Viga(
				id: repositorio.ProximoId(),
				dimensoes: arr_dimensoes,
				bitolas: arr_bitolas,
				nArmacoes: arr_qtd,
				apoios: apoios
			);

			return novaViga;
		}

        private static void ListarVigas()
		{
			var vigas = repositorio.ListarVigas();
			string statusExcluida = "ativa";

			if(vigas.Count == 0)
			{
				System.Console.WriteLine(" >>> Não há nenhuma viga cadastrada <<<");
			}
			else
			{
				foreach (var viga in vigas)
				{
		
					if(viga.VigaExcluida())
					{
						statusExcluida = "excluída";
					}
					System.Console.WriteLine(viga.getNomeViga() + statusExcluida);
				}	
			}
			
		}

		private static void InserirViga()
		{
			Viga novaViga = CriarViga();

			repositorio.InserirViga(novaViga);

			System.Console.WriteLine("Viga " + novaViga.getNomeViga() + " inserida com sucesso!");
		}

		public static void VisualizarViga(string nomeViga)
		{	
			var vigas = repositorio.ListarVigas();

			if(vigas.Count == 0)
			{
				System.Console.WriteLine(" >>> Não há nenhuma viga cadastrada <<<");
			}
			else
			{
				if(nomeViga == "")
				{
					System.Console.WriteLine("Vigas existentes:");
					ListarVigas();

					System.Console.WriteLine("Digite o nome de uma das vigas acima para detalhá-la: ");
					string thisNomeViga = System.Console.ReadLine()!.ToUpper();
					nomeViga = thisNomeViga;
					System.Console.WriteLine();
				}

				if(repositorio.ExisteViga(nomeViga))
				{
					repositorio.VisualizarViga(nomeViga);
				}
				else
				{
					System.Console.WriteLine("Esta viga não está cadastrada.");
				}
			}

		}

		public static void AtualizarViga()
		{
			System.Console.Write("Digite o nome da viga: ");
			string nomeViga = System.Console.ReadLine()!.ToUpper(); //int.Parse(System.Console.ReadLine()!);

			if(repositorio.ExisteViga(nomeViga))
			{
				VisualizarViga(nomeViga);

				System.Console.WriteLine("Tem certeza que quer atualizar esta viga? (S/N)");
				string confirma_atualizacao = System.Console.ReadLine()!.ToUpper();
				
				if(confirma_atualizacao == "S")
				{
					repositorio.AtualizarViga(nomeViga,CriarViga());
					System.Console.WriteLine("Você atualizou a viga " + nomeViga);
				}
				else
				{
					System.Console.WriteLine("Você não atualizou a viga");
				}
				
			}
		}

		public static void ExcluirViga()
		{
			System.Console.Write("Digite o nome da viga: ");
			string nomeViga = System.Console.ReadLine()!.ToUpper(); //int.Parse(System.Console.ReadLine()!);

			if(repositorio.ExisteViga(nomeViga))
			{
				VisualizarViga(nomeViga);

				System.Console.WriteLine("Tem certeza que quer excluir esta viga? (S/N)");
				string confirma_exclusao = System.Console.ReadLine()!.ToUpper();
				
				if(confirma_exclusao == "S")
				{
					repositorio.ExcluirViga(nomeViga);
				}
				else
				{
					System.Console.WriteLine("Viga " + nomeViga + " não excluída.");
				}
			}
		}
        private static string MenuPrincipal()
		{
			System.Console.WriteLine();
			System.Console.WriteLine("**********ConCad - Módulo Vigas**********");
			System.Console.WriteLine();
			System.Console.WriteLine("Informe a opção desejada:");
			System.Console.WriteLine();
			System.Console.WriteLine("ls - Listar vigas");
			System.Console.WriteLine("vg - Inserir nova viga");
			System.Console.WriteLine("vz- Visualizar viga");
			System.Console.WriteLine("up - Atualizar viga");
			System.Console.WriteLine("ex- Excluir viga");
			System.Console.WriteLine("cls- Limpar Tela");
			System.Console.WriteLine("X- Sair");
			System.Console.WriteLine();

			string opcaoUsuario = System.Console.ReadLine()!.ToUpper();
			System.Console.WriteLine();
			return opcaoUsuario;
		}
    }
}
