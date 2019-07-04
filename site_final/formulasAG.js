function eneTpa() {
    var prit = Number.parseFloat(document.getElementById('prit').value);
    var indn = Number.parseFloat(document.getElementById('indn').value);
    var razao = Number.parseFloat(document.getElementById('razao').value);
    var resp = 'O enésimo termo é: ' + (prit + ((indn - 1)*razao));
    console.log(resp);
    document.getElementById('C1').innerHTML = resp;
}

function somaPA() {
    var prit = Number.parseFloat(document.getElementById('prit2').value);
    var ultt = Number.parseFloat(document.getElementById('ultt').value);
    var nt = Number.parseFloat(document.getElementById('nt').value);
    var resp = 'A soma da PA é: ' + ((nt*(prit+ultt))/2);
    console.log(resp);
    document.getElementById('C2').innerHTML = resp;
}

function razaoPA() {
    var prit = Number.parseFloat(document.getElementById('t1').value);
    var tn = Number.parseFloat(document.getElementById('tn').value);
    var indn = Number.parseFloat(document.getElementById('indn1').value);
    var resp = 'A razão da PA é: ' + ((tn-prit)/(indn-1));
    console.log(resp);
    document.getElementById('C3').innerHTML = resp;
}

function eneTpg() {
    var prit = Number.parseFloat(document.getElementById('pritpg').value);
    var indn = Number.parseFloat(document.getElementById('indnpg').value);
    var razao = Number.parseFloat(document.getElementById('razaopg').value);
    var resp = 'O enésimo termo é: ' + (prit * (Math.pow(razao, indn - 1)));
    console.log(resp);
    document.getElementById('C4').innerHTML = resp;
}

function somaPG() {
    var prit = Number.parseFloat(document.getElementById('prit2pg').value);
    var q = Number.parseFloat(document.getElementById('qpg').value);
    var nt = Number.parseFloat(document.getElementById('ntpg').value);
    var resp = 'A soma da PG é: ' + (prit* ( (Math.pow(q,nt) -1)/(q-1) ));
    console.log(resp);
    document.getElementById('C5').innerHTML = resp;
}

function razaoPG() {
    var prit = Number.parseFloat(document.getElementById('t1pg').value);
    var segt = Number.parseFloat(document.getElementById('tnpg').value);

    var resp = 'A razão da PG é: ' + (segt/prit);
    console.log(resp);
    document.getElementById('C6').innerHTML = resp;
}

function fatorial() {
    var n = Number.parseFloat(document.getElementById('nfat').value);
    var a = 1;

    for (i=n;i>0;i--) {
        a = a * i
    }
    var resp = 'O fatorial é: ' + a;
    console.log(resp);
    document.getElementById('C7').innerHTML = resp;
}

function fibonacci() {
    var n = Number.parseFloat(document.getElementById('nfib').value);
    var a = 1;
    var b = 0;
    var acc;

    while (n-1 >= 0){
        acc = a;
        a = a + b;
        b = acc;
        n--;
      }

    var resp = 'O número é: ' + b;
    console.log(resp);
    document.getElementById('C8').innerHTML = resp;
}

function pit() {

    var a_str = document.getElementById('hipotenusa').value;
    var b_str = document.getElementById('cateto1').value;
    var c_str = document.getElementById('cateto2').value;
    if (a_str && b_str){

        document.getElementById('C9').innerHTML = ('Cateto =' + Math.sqrt(+ Math.pow(a_str,2) - + Math.pow(b_str,2)))
    } else if (a_str && c_str) {

        document.getElementById('C9').innerHTML = ('Cateto =' + Math.sqrt(+ Math.pow(a_str,2) - + Math.pow(c_str,2)));

    } else if (b_str && c_str) {
        document.getElementById('C9').innerHTML = ('Hipotenusa =' + Math.sqrt(+ Math.pow(b_str,2) + + Math.pow(c_str,2)))
    }
}
   
  
    