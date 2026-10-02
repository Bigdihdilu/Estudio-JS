//foreach

// var numero = [1, 2, 3, 4, 5, 6, 7];

// numero.forEach(function(i){
//     console.log(i);
// })

//some - sirve para saber si al menos un elemento del array cumple con la condición que le pasamos, si es así devuelve true, de lo contrario devuelve false.

// let numeros = [1, 2, 3, 4, 5];

// console.log(numeros.some((value) =>{
//     return(value % 2 == 0)
// }));

//every - sirve para saber si todos los elementos del array cumplen con la condición que le pasamos, si es así devuelve true, de lo contrario devuelve false.

// let numeros = [1, 2, 3, 4, 5];

// console.log(numeros.every((value)=>{
//     return(value == 5);
// }));

//map - sirve para crear un nuevo array con los resultados de la ejecución de una función para cada elemento del array original.

// let numeros = [1,2,3,4,5,6];

// let duplicar = numeros.map((value)=>{
//     return value * 2;
// });

// console.log(duplicar);

//filter - sirve para crear un nuevo array con todos los elementos que cumplan con la condición que le pasamos.

// let numeros = [1020,3340,23343,223422];

// let numeros_grandes = numeros.filter((value)=>{
//     return value > 2500;
// });
// console.log(numeros_grandes);

//reduce - sirve para reducir todos los elementos de un array a un único valor, aplicando una función que recibe como parámetros el acumulador y el valor actual.

let numero = [1,2,3,4,5,6,7];

let respuesta = numero.reduce((sumar,dato_act) =>
    sumar + dato_act, 0);
console.log(respuesta);