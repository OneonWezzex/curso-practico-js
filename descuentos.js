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


//Calcular precio con descuento de cupones a través de un selector de HTML

function onClickButtonPriceDiscountOption() {
    var inputPrice = document.getElementById("inputPrice");
    var priceValue = parseInt(inputPrice.value);

    var inputCoupon = document.getElementById("inputCouponOption");
    var couponValue = inputCoupon.value;

    var descuento;

    switch(couponValue) {
        case "Cupon1":
            descuento = 15;
        break;
        case "Cupon2":
            descuento = 30;
        break;
        case "Cupon3":
            descuento = 25;
        break;
    }

    var precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    var resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//Calcular descuento con cupones escritos
var coupons = [
    "Cupon1",
    "Cupon2",
    "Cupon3",
];

function onClickButtonPriceDiscountText1() {
    var inputPrice = document.getElementById("inputPrice");
    var priceValue = parseInt(inputPrice.value);

    var inputCouponText1 = document.getElementById("inputCouponText1")
    var couponText1Value = inputCouponText1.value;

    var descuento;

    if (!coupons.includes(couponText1Value)) {
        alert("El cupón " + couponText1Value + "no es válido");
    } else if (couponText1Value === "Cupon1") {
        descuento= 15;
    } else if (couponText1Value === "Cupon2") {
        descuento = 30;
    } else if (couponText1Value === "Cupon3") {
        descuento = 25;
    }

    var precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    var resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}


//Calcular descuento con funciones mas inteligentes y menos lineas de código

var coupons2 = [
    {
        name: "Cupon1",
        discount: 15,
    },
    {
        name: "Cupon2",
        discount: 30,
    },
    {
        name: "Coupon3",
        discount: 25,
    },
];

var isCouponValueValid = function (cupon) {
    return coupons2.name === couponValue;
};

var userCoupon = coupons2.find(isCouponValuevalid);

if (!userCoupon) {
    alert("El cupon " + userCouponValue + "no es válido");
} else {
    var descuento = userCoupon.discount;
    var precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    var resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}