//Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
function ladoCuadrado(lado) {
    return lado;
}

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímtero del cuadrado es: " + perimetroCuadrado + " cm");
function perimetroCuadrado(lado) {
    return lado * 4;
}

//const areaCuadrada = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrada + " cm2");
function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.groupCollapsed("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo);

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perímtero del triángulo es: " + perimetroTriangulo + " cm");
function perimetroTiangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El área del triángulo es: " + areaTriangulo + " cm2");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Código del cículo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + " cm");

//Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del círculo es: " + diametroCirculo + " cm");
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
//const pi = Math.PI;
//console.log("PI es: " + pi);

//Circundeferencia
//const perimetroCirculo = diametroCirculo * pi;
//console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

//Área
//const areaCirculo = (radioCirculo * radioCirculo) * pi;
//console.log("El área del círculo es: " + areaCirculo + " cm2");
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
function calcularPerimetroTriangulo() {
    var inputLado1 = document.getElementById("inputLado1Triangulo");
    var inputLado2 = document.getElementById("inputLado2Triangulo");
    var inputBase = document.getElementById("inputBaseTriangulo");

    var lado1 = parseInt(inputLado1.value);
    var lado2 = parseInt(inputLado2.value);
    var base = parseInt(inputBase.value);

    var perimetro = lado1 + lado2 + base;
    alert(perimetro);
}

function calcularAreaTriangulo() {
    var inputBase = document.getElementById("inputBaseTriangulo");
    var inputAltura = document.getElementById("inputAlturaTriangulo");

    var base = parseInt(inputBase.value);
    var altura = parseInt(inputAltura.value);

    var area = (base * altura) / 2;
    alert(area);
}

//Círculo
function calcularDiametroCirculo() {
    var inputRadio = document.getElementById("inputRadioCirculo");

    var radio = parseInt(inputRadio.value);

    var diametro = radio * 2;
    alert(diametro);
}

function calcularPerimetroCirculo() {
    var inputRadio = document.getElementById("inputRadioCirculo");

    var radio = parseInt(inputRadio.value);

    var perimetro = (radio * 2) * Math.PI;

    alert(perimetro);
}

function calcularAreaCirculo() {
    var inputRadio = document.getElementById("inputRadioCirculo");

    var radio = parseInt(inputRadio.value);

    var area = (radio * radio) * Math.PI;

    alert(area);
}