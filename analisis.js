//Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

//funcion para calcular promedio
function calcularMediaAritmetica(lista) {
    var sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    var promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora Mediana
function medianaSalarios(lista) {
    var mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        var personitaMitad1 = lista[mitad - 1];
        var personitaMitad2 = lista[mitad];

        var mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        var personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General
var salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);
var salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

var medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top 10%
var spliceStart = (salariosColSorted.length * 90) / 100;
var spliceCount = salariosColSorted.length - spliceStart;
var salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

var medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});

console.log(medianaSalarios(salariosColSorted));