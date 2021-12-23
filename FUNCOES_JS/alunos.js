const alunos = [
    {
        id: 0,
        nome: 'João',
        nota: 8,
        faltas: 0.2,
        turma: 201
    },
    {
        id: 1,
        nome: 'Pedro',
        nota: 2,
        faltas: 0.5,
        turma: 201
    },
    {
        id: 2,
        nome: 'Paulo',
        nota: 10,
        faltas: 0.9,
        turma: 201
    },
]

const alunos_aprovados = []

const avaliacao = (alunos, media, presenca_minima) => {
    alunos.forEach(aluno => {
        const {nota, nome, faltas, id} = aluno
        if(nota >= media && faltas <= presenca_minima){
            alunos_aprovados.push([id,nome])
        }
    })
    
    return alunos_aprovados
}

console.log(avaliacao(alunos,7, 0.75))