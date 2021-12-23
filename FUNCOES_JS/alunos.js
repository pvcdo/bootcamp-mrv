const alunos = [
    {
        nome: 'João',
        nota: 8,
        turma: 201
    },
    {
        nome: 'Pedro',
        nota: 2,
        turma: 201
    },
    {
        nome: 'Paulo',
        nota: 10,
        turma: 201
    },
]

const alunos_aprovados = []

const avaliacao = (alunos, media) => {
    alunos.forEach(aluno => {
        const {nota, nome} = aluno
        if(nota >= media){
            alunos_aprovados.push([nome,nota])
        }
    })
    
    return alunos_aprovados
}

console.log(avaliacao(alunos,7))