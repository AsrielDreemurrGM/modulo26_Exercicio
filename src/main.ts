function multiplicacao(primNumero: number, segNumero: number): number {
    return primNumero * segNumero;
}

console.log(multiplicacao(10, 10));

function dizOla(nome: string): string {
    let saudacao: string = "Olá ";
    let saudacaoCompleta: string = saudacao + nome;

    // Também é possível fazer sem a variável "saudacao";
    // let saudacaoCompleta: string = "Olá " + nome;

    // Ou direto no return;
    // return "Olá " + nome;

    return saudacaoCompleta;
}

console.log(dizOla("Maria"));