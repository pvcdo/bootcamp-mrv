using System;

namespace ConCad.Vigas
{
    class Program
    {
        static VigasRepositorio repositorio = new VigasRepositorio();
        static void Main(string[] args)
        {
            string opcaoUsuario = ObterOpcaoUsuario();

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
						VisualizarViga();
						break;/*
					case "UP":
						AtualizarViga();
						break;/*
					case "EX":
						ExcluirViga();
						break;/*
					case "CLS":
						System.Console.Clear();
						break;*/

					default:
						throw new ArgumentOutOfRangeException();
				}

				opcaoUsuario = ObterOpcaoUsuario();
			}

			System.Console.WriteLine("Obrigado por utilizar nossos serviços.");
        }

        private static void ListarVigas()
		{
			var vigas = repositorio.ListarVigas();

			if(vigas.Count == 0)
			{
				System.Console.WriteLine(" >>> Não há nenhuma viga cadastrada <<<");
			}

			foreach (var viga in vigas)
			{
				System.Console.WriteLine(viga.getNomeViga());
			}
			
		}

		private static void InserirViga()
		{
			System.Console.WriteLine("Atualmente estamos inserindo uma viga padrão");
			System.Console.WriteLine();

			int[] array_dimensoes = new int[3]{20,30,600};
			double[] arr_bitolas = new double[2]{8,4.2};
			int[] arr_nArmacoes = new int[2]{3,2};
			List<string> lista_apoios = new List<string>{"P1","P2"};

			Viga novaViga = new Viga(
				id: repositorio.ProximoId(),
				dimensoes: array_dimensoes,
				bitolas: arr_bitolas,
				nArmacoes: arr_nArmacoes,
				apoios: lista_apoios
			);

			repositorio.InserirViga(novaViga);

			System.Console.WriteLine("Viga " + novaViga.getNomeViga() + " inserida com sucesso!");
		}

		public static void VisualizarViga()
		{
			System.Console.WriteLine("Atualmente estamos visualizando apenas a viga V0");
			System.Console.WriteLine();

			var vigas = repositorio.ListarVigas();

			if(vigas.Count == 0)
			{
				System.Console.WriteLine(" >>> Não há nenhuma viga cadastrada <<<");
			}

			repositorio.VisualizarViga("V0");
		}

		

        private static string ObterOpcaoUsuario()
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

			string opcaoUsuario = System.Console.ReadLine().ToUpper();
			System.Console.WriteLine();
			return opcaoUsuario;
		}
    }
}
