let nomeAluno = prompt ("Nome do aluno?")
    if (nomeAluno.length<5){
        alert ("Nome invalido")
    }

let presenca = parseInt(prompt("Qual a presença?"))

let notaMatematica = parseFloat(prompt("Digite a nota de matematica"))

let notaPortugues = parseFloat(prompt("Digite a nota de Portugues"))

let notaGeografia = parseFloat(prompt("Digite a nota de Geografia"))

let soma = notaMatematica + notaPortugues + notaGeografia

let media = soma / 3
    if (media >=8 && presenca >= 6){
        alert (`A nota do aluno ${nomeAluno} é de ${media.toFixed(10)} e sua presença de ${presenca}: Aluno aprovado!`)
    }else{
        alert (`A nota do aluno ${nomeAluno} é de ${media.toFixed(10)} e sua presença de ${presenca}: Aluno reprovado!`)
    }