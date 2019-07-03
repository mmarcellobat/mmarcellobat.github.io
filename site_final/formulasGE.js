function aLateralPrism() {
    var lados = Number.parseFloat(document.getElementById('lados0').value);
    var facelateral = Number.parseFloat(document.getElementById('faceLateral0').value);
    var resp = 'Área lateral do prisma: ' + (lados * facelateral);
    console.log(resp);
    document.getElementById('F0').innerHTML = resp; 
}
function aTotalPrism() {
    var SomaLateral = Number.parseFloat(document.getElementById('Somalateral0').value);
    var SomaBase = Number.parseFloat(document.getElementById('SomaAreaBase0').value);
    var resp = 'Área Total do prisma: ' + (SomaLateral + SomaBase * 2);
    console.log(resp);
    document.getElementById('F1').innerHTML = resp;
}
function aPrismTrian() {
    var basetrian = Number.parseFloat(document.getElementById('BaseTrian0').value);
    var altura = Number.parseFloat(document.getElementById('Altura0').value);
    var resp = 'Área do prisma Triangular: ' + (basetrian * altura / 2)
    console.log(resp);
    document.getElementById('F2').innerHTML = resp;
}
function aPrismParalelogramo() {
    var baseparalelo = Number.parseFloat(document.getElementById('Baseparalelo0').value);
    var alturaparalelo = Number.parseFloat(document.getElementById('Altura1').value);
    var resp = 'Área do Prisma Paralelogramo: ' + (baseparalelo * alturaparalelo)
    console.log(resp);
    document.getElementById('F3').innerHTML = resp;
}
function aLateralParalelogramo() {
    var numeroladodebases = Number.parseFloat(document.getElementById('ladodebases0').value);
    var areaparalelogramo = Number.parseFloat(document.getElementById('areaparalelogramo0').value);
    var resp = 'Área lateral do Paralelogramo: ' + (numeroladodebases * areaparalelogramo)
    console.log(resp);
    document.getElementById('F4').innerHTML = resp;
}
function aPrismTrian() {
    var basetrian = Number.parseFloat(document.getElementById('basetriangular0').value);
    var alturatrian = Number.parseFloat(document.getElementById('alturatrian0').value);
    var alturaprism = Number.parseFloat(document.getElementById('alturaprism0').value);
    var resp = 'Área do Prisma triangular: ' + (basetrian * (alturatrian + 3 * alturaprism))
    console.log(resp);
    document.getElementById('F5').innerHTML = resp; 
}
function aPrismParalelogramo1() {
    var largurabase = Number.parseFloat(document.getElementById('largurabase0').value);
    var comprimentoprisma = Number.parseFloat(document.getElementById('larguraprisma0').value);
    var comprimentolateral = Number.parseFloat(document.getElementById('comprimentolateral0').value);
    var resp = 'Área do prisma cuja base é um paralelogramo: ' + (2 * largurabase * (comprimentoprisma + 2 * comprimentolateral))
    console.log(resp);
    document.getElementById('F6').innerHTML = resp;
}
function VolumPrism() {
    var Areadabase = Number.parseFloat(document.getElementById('areadabase0').value);
    var alturaprisma = Number.parseFloat(document.getElementById('alturaprism1').value);
    var resp = 'Volume do Prisma: ' + (Areadabase * alturaprisma)
    console.log(resp);
    document.getElementById('F7').innerHTML = resp;
}
function Areadocubo() {
    var aresta = Number.parseFloat(document.getElementById('arestacubo0').value);
    var resp = 'Área do cubo: ' + (6 * aresta * aresta)
    console.log(resp);
    document.getElementById('F8').innerHTML = resp;
}
function AreaLateraldoCubo() {
    var aresta = Number.parseFloat(document.getElementById('arestadocubo1').value);
    var resp = 'Área lateral do cubo: ' + (4 * aresta * aresta)
    console.log(resp);
    document.getElementById('F9').innerHTML = resp;
}
function AreadaBasedoCubo() {
    var aresta = Number.parseFloat(document.getElementById('arestadocubo2').value);
    var resp = 'Área da Base do cubo: ' + (aresta * aresta)
    console.log(resp);
    document.getElementById('F10').innerHTML = resp;
}
function VolumeCubo() {
    var aresta = Number.parseFloat(document.getElementById('arestadocubo3').value);
    var resp = 'Volume do cubo: ' + (aresta * aresta * aresta)
    console.log(resp);
    document.getElementById('F11').innerHTML = resp;
}
function Areadabaseparalelepipedo() {
    var medidadabase = Number.parseFloat(document.getElementById('medidadabase0').value);
    var medidadaaltura = Number.parseFloat(document.getElementById('medidadaaltura0').value);
    var resp = 'Área da base: ' + (medidadabase * medidadaaltura)
    console.log(resp);
    document.getElementById('F12').innerHTML = resp;
}
function Arealateralparalelepipedo() {
    var aresta1 = Number.parseFloat(document.getElementById('arestaparalelepipedo0').value);
    var aresta2 = Number.parseFloat(document.getElementById('arestaparalelepipedo1').value);
    var aresta3 = Number.parseFloat(document.getElementById('arestaparalelepipedo2').value);
    var resp = 'Área Lateral: ' + (2 * (aresta1 * aresta3 + aresta2 * aresta3))
    console.log(resp);
    document.getElementById('F13').innerHTML = resp;
}
function AreaTotalparalelepipedo() {
    var aresta1 = Number.parseFloat(document.getElementById('arestaparalelepipedo3').value);
    var aresta2 = Number.parseFloat(document.getElementById('arestaparalelepipedo4').value);
    var aresta3 = Number.parseFloat(document.getElementById('arestaparalelepipedo5').value);
    var resp = 'Área Total: ' + (2 * (aresta1 * aresta2 + aresta1 * aresta3 + aresta2 * aresta3))
    console.log(resp);
    document.getElementById('F14').innerHTML = resp;
}
function Volumeparalelepipedo() {
    var aresta1 = Number.parseFloat(document.getElementById('arestaparalelepipedo6').value);
    var aresta2 = Number.parseFloat(document.getElementById('arestaparalelepipedo7').value);
    var aresta3 = Number.parseFloat(document.getElementById('arestaparalelepipedo8').value);
    var resp = 'Volume do Paralelepipedo: ' + (aresta1 * aresta2 * aresta3)
    console.log(resp);
    document.getElementById('F15').innerHTML = resp;
}
function Areadapiramide() {
    var arealateral = Number.parseFloat(document.getElementById('arealateralpiramide0').value);
    var areadabase = Number.parseFloat(document.getElementById('areadabasepiramide0').value);
    var resp = 'Area Da Piramide: ' + (arealateral + areadabase)
    console.log(resp);
    document.getElementById('F16').innerHTML = resp;
}
function Volumedapiramide() {
    var areadabase = Number.parseFloat(document.getElementById('areadabasepiramide1').value);
    var alturapiramide = Number.parseFloat(document.getElementById('alturapiramide0').value);
    var resp = 'Volume da pirâmide: ' + (1 / 3 * areadabase * alturapiramide)
    console.log(resp);
    document.getElementById('F17').innerHTML = resp;
}
function Areadocone() {
    var raio = Number.parseFloat(document.getElementById('raiodocone0').value);
    var resp = 'Área do cone: ' + (3.14 * raio * raio)
    console.log(resp);
    document.getElementById('F18').innerHTML = resp;
}
function Arealateralcone() {
    var raio = Number.parseFloat(document.getElementById('raiodocone1').value);
    var geratriz = Number.parseFloat(document.getElementById('geratrizcone0').value);
    var resp = 'Área lateral do Cone: ' + (3.14 * raio * geratriz)
    console.log(resp);
    document.getElementById('F19').innerHTML = resp;
}
function Areatotalcone() {
    var raio = Number.parseFloat(document.getElementById('raiodocone2').value);
    var geratriz = Number.parseFloat(document.getElementById('geratrizcone1').value);
    var resp = 'Área total do cone: ' + (3.14 * raio * (geratriz + raio))
    console.log(resp);
    document.getElementById('F20').innerHTML = resp;
}
function Volumedocone() {
    var altura = Number.parseFloat(document.getElementById('alturadocone0').value);
    var raio = Number.parseFloat(document.getElementById('raiodocone3').value);
    var resp = 'Volume do Cone: ' + (1 / 3 * 3.14 * raio * raio * altura )
    console.log(resp);
    document.getElementById('F21').innerHTML = resp;  
}
function Areadabasecilindro() {
    var raio = Number.parseFloat(document.getElementById('raiocilindro0').value);
    var resp = 'Área da base do Cilindro: ' + (3.14 * raio * raio)
    console.log(resp);
    document.getElementById('F22').innerHTML = resp;
}
function Arealateralcilindro() {
    var raio = Number.parseFloat(document.getElementById('raiocilindro1').value);
    var altura = Number.parseFloat(document.getElementById('alturacilindro0').value);
    var resp = 'Área lateral do Cilindro: ' + (2 * 3.14 * raio * altura)
    console.log(resp);
    document.getElementById('F23').innerHTML = resp;
}
function Areatotalcilindro() {
    var areadabase = Number.parseFloat(document.getElementById('areadabasecilindro0').value);
    var arealateral = Number.parseFloat(document.getElementById('arealateralcilindro0').value);
    var resp = 'Área total do cilindro: ' + (2 * areadabase + arealateral)
    console.log(resp);
    document.getElementById('F24').innerHTML = resp;
}
function Volumecilindro() {
    var altura = Number.parseFloat(document.getElementById('alturacilindro1').value);
    var areadabase = Number.parseFloat(document.getElementById('areadabasecilindro1').value);
    var resp = 'Volume do Cilindro: ' + (areadabase * altura)
    console.log(resp);
    document.getElementById('F25').innerHTML = resp;
}
function Areadaesfera() {
    var raio = Number.parseFloat(document.getElementById('raioesfera0').value);
    var resp = 'Area da Esfera: ' + (4 * 3.14 * raio * raio)
    console.log(resp);
    document.getElementById('F26').innerHTML = resp;  
}
function Volumeesfera() {
    var raio = Number.parseFloat(document.getElementById('raioesfera1').value);
    var resp = 'Area da Esfera: ' + (4 * 3.14 * raio * raio * raio / 3)
    console.log(resp);
    document.getElementById('F27').innerHTML = resp; 
}