var lista1 = [
    100,
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista) {
    // var sumaLista = 0;

    // for (var i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    var sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    var promedioLista = sumaLista / lista.length;

    return promedioLista;
}