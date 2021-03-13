console.log('#  Sistema de notas escolares  #');

const nota = 98;

function getScore(nota) {
    const notaA = nota >= 90 && nota <= 100;
    const notaB = nota >= 80 && nota <= 89;
    const notaC = nota >= 70 && nota <= 79;
    const notaD = nota >= 60 && nota <= 69;
    const notaE = nota < 60 && nota >= 0;

    if (notaA) {
        console.log(`Você tirou A. Parabéns!`)
    } else if (notaB) {
        console.log(`Você tirou B. Parabéns!`)
    } else if (notaC) {
        console.log(`Você tirou C. Estude mais.`)
    } else if (notaD) {
        console.log(`Você tirou D. Está precisando revisar os estudos.`)
    } else if (notaE) {
        console.log(`Você tirou F. Você não foi bem, revise os estudos.`)
    } else {
        console.log(`Nota inválida`)
    }

    return nota;

}

console.log(getScore(nota))
