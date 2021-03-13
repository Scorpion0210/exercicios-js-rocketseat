console.log('#                #');
console.log('#  Fluxo de caixa familiar  #');
/*

Criar um objeto que possuírá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e
despesas e irá mostrar uma mensagem se a família está com o 
saldo positivo ou negativo, seguindo do valor do saldo.

*/

const fluxoCaixa = {
    receitas: [2000.00, 500.00],
    despesas: [450.00, 800.00, 688.50, 98.40, 289.40, 200]
};

const totalReceita = fluxoCaixa.receitas.reduce((acc, item) => {

    return acc + item;
});
const totalDespesas = fluxoCaixa.despesas.reduce((acc, item) => {

    return acc + item;
});

function totalCaixa(rec, des) {
    const total = (rec - des).toFixed(2);

    if (total >= 0) {
        console.log(`Seu saldo é R$${total}, conta está positiva.`);
    } else {
        console.log(`Seu saldo é R$${total}, conta está negativa.`);
    }

    return total;
}

totalCaixa(totalReceita, totalDespesas);

/* feito pelo Mayk

function sum(array){
    total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function balance(){
    const incomes = sum(fluxoCaixa.receitas);
    const expenses = sum(fluxoCaixa.despesas)

    const total = (incomes - expenses).toFixed(2);

    if (total >= 0) {
        console.log(`Seu saldo é R$ ${total}, conta está positiva.`);
    } else {
        console.log(`Seu saldo é R$ ${total}, conta está negativa.`);
    }
}

balance()
*/
