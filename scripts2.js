console.log('#                #');
console.log('#  Celsius em Fahrenheit  #');
/*
Vrie uma função que receba uma string em celsius ou fahrenheit e
faça a transformação de uma unidade para outra

C = (F - 32) * 5 / 9

F = C * 9 / 5 + 32

*/

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExisits = degree.toUpperCase().includes('F');

    // Fluxo de Erro
    if (!celsiusExists && !fahrenheitExisits) {
        throw new Error('Grau não identificado')
    }

    // Fluxo ideal, F => C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
    let degreeSing = 'C';


    // Fluxo alternativo C => F
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9 / 5 + 32
        degreeSing = 'F';
    }

    return formula(updateDegree) + degreeSing;
}

try {
    console.log(transformDegree('39C'));
    console.log(transformDegree('102.2F'));
    transformDegree('50z');
} catch (error) {
    console.log(error.message)
}