function Q1() {
    var x = Number.parseInt(document.getElementById('x').value);
    var y = Number.parseInt(document.getElementById('y').value);
    document.getElementById('r1-1').innerHTML = 'o valor de x é ' + x;
    document.getElementById('r1-2').innerHTML = '<br>o valor de y é ' + y;
    document.getElementById('r1-3').innerHTML = '<br>o quociente é ' + quociente(x,y);
    document.getElementById('r1-4').innerHTML = '<br>o resto é ' + resto(x,y);
}

function quociente(x,y) {
    return Math.floor(x / y);
}
function resto(x,y) {
    return x % y;
}

function Q2() {
    var x = Number.parseFloat(document.getElementById('x').value);
    var y = Number.parseFloat(document.getElementById('y').value);
    document.getElementById('r2-1').innerHTML = 'o valor de x é ' + x;
    document.getElementById('r2-2').innerHTML = '<br>o valor de y é ' + y;
    document.getElementById('r2-3').innerHTML = '<br>a hipotenusa é ' + hipotenusa(x,y);
}

function hipotenusa(x,y) {
    return Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))
}

function Q3() {
    var aux = document.getElementById('profissoes');
    var profissao = aux.options[aux.selectedIndex].text;
    if (profissao=='Atriz') {
        document.getElementById('r3-1').innerHTML = 'você é: ' + profissao;
        document.getElementById('r3-2').innerHTML = '<br>e é um substantivo feminino'
    }
    else if (profissao=='Ator'||profissao=='Professor') {
        document.getElementById('r3-1').innerHTML = 'você é: ' + profissao;
        document.getElementById('r3-2').innerHTML = '<br>e é um substantivo masculino'
    }
    else if (profissao=='Musicista' || profissao=='Presidente') {
        document.getElementById('r3-1').innerHTML = 'você é: ' + profissao;
        document.getElementById('r3-2').innerHTML = '<br>e é um substantivo dos dois gêneros'
    }
    else if (profissao.endsWith('a')) {
        document.getElementById('r3-1').innerHTML = 'você é: ' + profissao;
        document.getElementById('r3-2').innerHTML = '<br>e é um substantivo feminino'
    }
    else if (profissao.endsWith('o')) {
        document.getElementById('r3-1').innerHTML = 'você é: ' + profissao;
        document.getElementById('r3-2').innerHTML = '<br>e é um substantivo masculino'
    }
    else{
        document.getElementById('r3-1').innerHTML = 'você é: ' + profissao;
        document.getElementById('r3-2').innerHTML = '<br>e é um substantivo dos dois gêneros'
    }
}

function Q4() {
    var a = Number.parseInt(document.getElementById('a').value);
    var b = Number.parseInt(document.getElementById('b').value);
    var c = Number.parseInt(document.getElementById('c').value);
    if (!b&&a&&c){
        document.getElementById('r4-1').innerHTML = 'o cateto B é ' + cateto(a,c);
    }
    else if (!c&&a&&b){
        document.getElementById('r4-1').innerHTML = 'o cateto C é ' + cateto(a,b);
    }
    else if (!a&&c&&b){
        document.getElementById('r4-1').innerHTML = 'a hipotenusa é ' + hipotenusa(b,c);
    }
    else {
        document.getElementById('r4-1').innerHTML = 'insira apenas dois valores, para receber o terceiro'
    }
}

function cateto(h,a) {
    return Math.sqrt(((Math.pow(h,2))-(Math.pow(a,2))))
}

function Q5() {
    var altura = Number.parseFloat(document.getElementById('altura').value);
    var peso = Number.parseFloat(document.getElementById('peso').value);
    var aux = document.getElementById('sexo');
    var sexo = aux.options[aux.selectedIndex].value;
    var imc = (peso/(altura*altura))
    var letra = (sexo=='masculino') ? 'o' : 'a';
    document.getElementById('r5-1').innerHTML = 'sua altura é: ' + altura;
    document.getElementById('r5-2').innerHTML = '<br>seu peso é: ' + peso;
    document.getElementById('r5-3').innerHTML = '<br>seu imc é: ' + (imc) + '<br>';
    if (imc<18.5) {
        document.getElementById('r5-4').innerHTML = 'você está magr' + letra;
    }
    else if (imc<24.9) {
        document.getElementById('r5-4').innerHTML = 'você está sarad' + letra;
    }
    else if (imc<29.9) {
        document.getElementById('r5-4').innerHTML = 'você está rechonchudo' + letra;
    }
    else {
        document.getElementById('r5-4').innerHTML = 'você está obes' + letra;
    }
}