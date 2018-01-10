'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzon;
function platzon(str) {
    var translation = str;

    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    var minMay = function minMay(str) {
        return str.split('').map(function (value, key) {
            return key % 2 == 0 ? value.toUpperCase() : value.toLowerCase();
        }).join('');
    };
    //4. Si la palabra original es un palindromo, 
    //ninguna regla anterior cuenta y se devuelve 
    //la misma palabra pero intercalando letras mayusculas y minusculas.
    if (str == reverse(str)) {
        return minMay(str);
    }

    //1. Si la palabra termina con "ar" se le quitan esas dos letras.
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }
    //2. Si la palabra inicia con Z, se le añade "pe" al final.    
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }
    //3. Si la palabra traducida tiene 10 o mas letras, 
    //se debe partir en dos por la mitad y unir con un guión medio.
    if (translation.length >= 10) {
        var firstHalf = translation.slice(0, Math.round(translation.length / 2));
        var secondHalf = translation.slice(Math.round(translation.length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    return translation;
}