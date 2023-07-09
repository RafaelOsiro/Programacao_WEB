function separateString(string) {
    printTexts(string.split(' '));
}

function printTexts(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

separateString("A Universidade Católica de Brasília é a melhor universidade do mundo. Só que não!");