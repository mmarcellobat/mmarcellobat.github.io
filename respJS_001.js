function Q1() {
    console.log('Q1');
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    console.log('o valor de x é ' + x);
    console.log('o valor de y é ' + y);
    console.log('o quociente é ' + Math.floor(x / y));
    console.log('o resto é ' + x % y);
}

function Q2() {
    console.log('Q2');
    var x = Number.parseFloat(document.getElementById('x').value);
    var y = Number.parseFloat(document.getElementById('y').value);
    console.log('o valor de x é ' + x);
    console.log('o valor de y é ' + y);
    console.log('a hipotenusa é ' + Math.sqrt((Math.pow(x,2))+((Math.pow(y,2)))))
}

function Q3() {
    console.log('Q3');
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    if (profissao=='Atriz') {
        console.log('você é: ' + profissao);
        console.log('e é um substantivo feminino')
    }
    else if (profissao=='Ator'||profissao=='Professor') {
        console.log('você é: ' + profissao);
        console.log('e é um substantivo masculino')
    }
    else if (profissao=='Musicista' || profissao=='Presidente') {
        console.log('você é: ' + profissao);
        console.log('e é um substantivo dos dois gêneros')
    }
    else if (profissao.endsWith('a')) {
        console.log('você é: ' + profissao);
        console.log('e é um substantivo feminino')
    }
    else if (profissao.endsWith('o')) {
        console.log('você é: ' + profissao);
        console.log('e é um substantivo masculino')
    }
    else{
        console.log('você é: ' + profissao);
        console.log('e é um substantivo dos dois gêneros')
    }
}

function Q4() {
    console.log('Q4');
    var a = Number.parseInt(document.getElementById('a').value);
    var b = Number.parseInt(document.getElementById('b').value);
    var c = Number.parseInt(document.getElementById('c').value);
    if (!b&&a&&c){
        console.log('o cateto oposto é ' + ((Math.pow(a,2))-(Math.pow(c,2))));
    }
    else if (!c&&a&&b){
        console.log('o cateto adjacente é ' + ((Math.pow(a,2))-(Math.pow(b,2))));
    }
    else if (!a&&c&&b){
        console.log('a hipotenusa é ' + ((Math.sqrt((Math.pow(b,2)))+((Math.pow(b,2))))));
    }
    else {
        console.log('insira apenas dois valores, para receber o terceiro')
    }
}

function Q5() {
    console.log('Q5');
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('sexo');
    var sexo = aux.options[aux.selectedIndex].value;
    var imc = (peso/(altura*altura))
    var letra = (sexo=='masculino') ? 'o' : 'a';
    console.log('sua altura é: ' + altura);
    console.log('seu peso é: ' + peso);
    console.log('seu imc é: ' + (imc));
    if (imc<18.5) {
        console.log('você está magr' + letra);
    }
    else if (imc<24.9) {
        console.log('você está sarad' + letra);
    }
    else if (imc<29.9) {
        console.log('você está rechonchud' + letra);
    }
    else {
        console.log('você está obes' + letra);
    }
}