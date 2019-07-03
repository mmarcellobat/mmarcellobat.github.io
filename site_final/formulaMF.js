function lucro() {
    var ganhos = Number.parseFloat(document.getElementById('ganhos').value);
    var gastos = Number.parseFloat(document.getElementById('gastos').value);
    var resp = 'Lucro total de: ' + ((ganhos - gastos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    console.log(resp);
    document.getElementById('F0').innerHTML = resp;
}

function juroSimp() {
    var capital = Number.parseFloat(document.getElementById('capital').value);
    var juros = Number.parseFloat(document.getElementById('juros').value);
    var tempo = Number.parseFloat(document.getElementById('tempo').value);
    var resp = 'Valor Final a ser pago:' + ((capital * (1 + ((juros / 100) * tempo)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })));
    console.log(resp);
    document.getElementById('F1').innerHTML = resp;
}

function juroComp() {
    var capital = Number.parseFloat(document.getElementById('capital2').value);
    var juros = Number.parseFloat(document.getElementById('juros2').value);
    var tempo = Number.parseFloat(document.getElementById('tempo2').value);
    var resp = 'Valor Final a ser pago: ' + ((capital * Math.pow((1 + (juros / 100)) , tempo)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    console.log(capital);
    document.getElementById('F2').innerHTML = resp;
}