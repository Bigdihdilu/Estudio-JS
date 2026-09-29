function suma(a, b) {
    var sum =  a + b;
    console.log('La suma es: ' + sum);
}
suma(5, 10);

console.log(" ");

//funciones retornables

function dato_trabajador() {
    var salario = 2500;
    console.log('su salario es: ' + salario);
}
var obrero = dato_trabajador();

console.log(" ");

//funciones anonimas(flecha)

var resta = (n1, n2) => n1 - n2;


console.log(resta(8, 2));

console.log(" ");

//funcion anidada

function operacion() {
    const PI = 3.14;
    function area(radio) {
        var area = PI * radio * radio;
        console.log('El area del circulo es: ' + area);
    }
    operacion.area = area;
}

var radio = 4;
operacion();
operacion.area(radio);