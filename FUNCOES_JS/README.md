## Atividade 1: alunos aprovados

A função `avaliacao` recebe um array de objetos que correspondem aos alunos com os atributos de id(código do aluno), nome, nota, número de faltas e turma na qual o aluno está matriculado e retorna um array com os ids e nomes dos alunos aprovados. 

A aprovação é confirmada caso o aluno tenha atingido a nota mínima e também comparecido ao número mínimo de aulas.

Foi utilizado o método de array `for each` para percorrer o array de alunos. O destructuring foi utilizado para recuperar os valores dos atributos do objeto que representa o aluno.

## Atividade 2: this

A função `calculaIdade` recebe a quantidade de anos passada a partir de hoje e retorna qual a idade que a pessoa terá ao passar estes anos.

Foram realizadas modificações que eu considerei interessantes na função inicial. Achei mais inteligente inserir a data de nascimento da pessoa para que seja retornada a idade real do indivíduo.

Utilizei o this calcular a idade atual da pessoa representada pelo objeto e também para receber seus atributos.