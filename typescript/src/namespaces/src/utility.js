"use strict";
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calcularteIva(prince) {
            return (prince * 0.21) + prince;
        }
        Taxes.calcularteIva = calcularteIva;
        function calculartePenaltyIva(prince) {
            return (prince * 0.30) + prince;
        }
        Taxes.calculartePenaltyIva = calculartePenaltyIva;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
