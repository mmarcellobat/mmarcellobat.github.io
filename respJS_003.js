var pares = [];
function par(x) {
    if (x%2 == 0) {
        return true;
    }
}

function Q1() {
    console.log('Q1');
    var aux = Number.parseInt(document.getElementById('numerosQ1').value);
    for (i=0;i<=aux;i++) {
        if (par(i)) {
            pares.push(i);
            document.getElementById('RQ1').innerHTML = document.getElementById('RQ1').innerHTML + i + " ";
            console.log(i)
        }
    }

}

var primos = [];
function primo(x){
    if ((x%2 != 0 || x == 2) && (x!=1)) {
        for (i = x-1;i>1;i--) {
            if (x%i==0){
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

function Q2() {
    console.log('Q2');
    var aux = Number.parseInt(document.getElementById('numerosQ2').value);
    for (e=2; e < aux ; e = e + 1) {
        if (primo(e)) {
            primos.push(e);
        }
    }
    for (t=0;t<primos.length;t++) {
        console.log(primos[t]); 
        document.getElementById('RQ2').innerHTML = document.getElementById('RQ2').innerHTML + primos[t] + " ";
    }
}

var listaStrings = [];
function add() {
    var novaString = document.getElementById('novaString').value;
    document.getElementById('novaString').value = '';
    listaStrings.push(novaString);
}

function Q3() {
    console.log('Q3');
    var a = '';
    for (i=0;i<listaStrings.length;i++) {
        var a = a + listaStrings[i] + ' ';
        document.getElementById('RQ3').innerHTML = document.getElementById('RQ3').innerHTML + listaStrings[i] + " ";
    }
    console.log(a);
}

var numerosQ4 = [];
var ordenados = [];
function lista(x) {
    var l = [];
    l = x.split(";");
    for (i=0;i<l.length;i++) {
        l[i] = Number(l[i]);
    }
    return l;
}


function quicksort(x,pri,ult){
    function troca(item,esq,dir) {
        var t = item[esq];
        item[esq] = item[dir];
        item[dir] = t;
    }

    function ordenar(item,pri,ult) {
    
        var pivo = (Math.floor((ult)/2));
        i = pri; //ponteiro esquerdo
        j = ult; //ponteiro direito

        while (i<=j) {
            while (item[i] < pivo) {
                i++;
            }
            while (item[j] > pivo) {
                j--;
            }
            if (i<=j) {
                troca(item,i,j);
                i++;
                j--;
            }

        }

        return i;//onde vai dividir a lista
    }

    var index;

    if (x.length>1){

        index = ordenar(x,pri,ult);

        if (pri<index-1) {
            quicksort(x,pri,index-1);
        }

        if (ult>index) {
            quicksort(x,index,ult);
        }
    }

    return x;

}

function Q4() {
    console.log('Q4');
    var aux = document.getElementById('numerosQ4').value;
    numerosQ4 = lista(aux);
    var resultado = quicksort(numerosQ4,0,numerosQ4.length-1);
    console.log(resultado);
    document.getElementById('RQ3').innerHTML = resultado;
}

var matrizA = [];
var matrizB = [];
function criarmatrizA() {
    var auxA = document.getElementById('matrizA').value;
    auxA = lista(auxA);
    matrizA.push(auxA);
    document.getElementById('ma').innerHTML = document.getElementById('ma').innerHTML + auxA + "<br>";
}

function criarmatrizB() {
    var auxB = document.getElementById('matrizB').value;
    auxB = lista(auxB);
    matrizB.push(auxB);
    document.getElementById('mb').innerHTML = document.getElementById('mb').innerHTML + auxB + "<br>";
}

function multiplicar(a,b) {

    linA = matrizA.length;
    colA = matrizA[0].length;

    linB = matrizB.length;
    colB = matrizB[0].length;

    matrizR = [];

    if (colA = linB) {
        for (i = 1;i<linA+1;i++) {
            matrizR.push([]);
            for(j = 1;j<colB+1;j++) {
                for (k=1;k<colA+1;k++){
                    c = matrizA[i-1][k-1]*matrizB[k-1][j-1]
                    matrizR[i-1].push(c);
                }
            }
        }
        return matrizR;
    }
    else {
        return "As matriz não podem ser multiplicadas";
    }
}
 
function Q5() {
    console.log('Q5');
    resultado = multiplicar(matrizA,matrizB);
    console.log(resultado);
    document.getElementById('RQ5').innerHTML = resultado;
}