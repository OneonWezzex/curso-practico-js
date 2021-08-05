function calcularMediaAritmetica(lista) {
    var sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    var promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// var lista1 = [
//     100,
//     200,
//     500,
//     400,
//     300,
//     900,
// ];


function calcularMediana(listaRandom) {

    listaRandom.sort();

    var mitadLista = parseInt(listaRandom.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) { //Si la division de numerito entre 2 arroja un resultado estrictamente igual a 0
            return true;
        } else {
            return false;
        }
    }

    var mediana;

    if (esPar(listaRandom.length)) {
        var elemento1 = listaRandom[mitadLista - 1];
        var elemento2 = listaRandom[mitadLista];

        var promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;

    } else {
        mediana = listaRandom[mitadLista];
    }

    return mediana;
}