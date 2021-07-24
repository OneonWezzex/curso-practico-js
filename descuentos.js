//var precioOriginal = 120;
//var descuento = 18;

//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});

function calcularPrecioConDescuento(precio, descuento) {
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    var inputPrice = document.getElementById("inputPrice");
    var priceValue = parseInt(inputPrice.value);


    var inputDiscount = document.getElementById("inputDiscount");
    var discountValue = parseInt(inputDiscount.value);

    var precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    var resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $ " + precioConDescuento;
}