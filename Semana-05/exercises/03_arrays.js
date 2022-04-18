// Exercise 3 - a
let month = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');

console.log('Month number 5 is: ' + month[4]);
console.log('Month number 11 is: ' + month[10]);

// Exercise 3 - b
month.sort();

console.log('The list of months in alphabetical order looks like this: ' + month);

// Exercise 3 - c
month.unshift('Mes');
month.push('Año');

console.log('Adding -Mes- and -Año- at the beggining and the end respectively results in: ' + month);

// Exercise 3 - d
month.shift('Mes');
month.pop('Año');

console.log('Removing -Mes- and -Año- from the beggining and the end respectively results in: ' + month);

// Exercise 3 - e
month.reverse();

console.log('The list of months in reverse is: ' + month);

// Exercise 3 - f
console.log('The list unified looks like: ' + month.join('-'));

// Exercise 3 - g
let monthNew = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
let monthTwo = new Array(monthNew.slice(4,11));

console.log('The list from month 5th to 11th looks like: ' + monthTwo);
