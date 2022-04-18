// Exercise 6 - a
var nA = 0;
var nB = 0;
var total = 0;

function suma1(num1, num2) {
    return num1 + num2;
}

console.log('Generating numeric values...');

nA = Math.floor( Math.random() * 101 );
nB = Math.floor( Math.random() * 101 );

console.log('Value number 1 is: ' + nA);
console.log('Value number 2 is: ' + nB);

total = suma1(nA, nB);

console.log('The addition of these two values results in: ' + total);

// Exercise 6 - b 
var nC = 0;
var nD = 0;
var nE = 'E';
var totalTwo;
var totalThree;
var totalFour;

function suma2(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'NaN';
    } else {
        return num1 + num2;
    }
}

console.log('Generating numeric values...');

nC = Math.floor( Math.random() * 101 );
nD = Math.floor( Math.random() * 101 );

console.log('Value number 1 is: ' + nC);
console.log('Value number 2 is: ' + nD);
console.log('Value number 3 is: ' + nE);

totalTwo = suma2(nC, nD);
totalThree = suma2(nC, nE);
totalFour = suma2(nD, nE);

console.log('The addition of value number 1 and value number 2 results in: ' + totalTwo);
console.log('The addition of value number 1 and value number 3 results in: ' + totalThree);
console.log('The addition of value number 2 and value number 3 results in: ' + totalFour);

// Exercise 6 - c
var nOne = 5;
var nTwo = 0.5;

function validateInteger(num1) {
    if (Number.isInteger(num1)) {
        return true;
    } else {
        return false;
    }
}

console.log('Value A is: ' + nOne);
console.log('Value B is: ' + nTwo);
console.log('Value A is an integer?: ' + validateInteger(nOne));
console.log('Value B is an integer?: ' + validateInteger(nTwo));

// Exercise 6 - d
var firstValue = 1;
var secondValue = 11;
var thirdValue = 20.7;
var fourthValue = 'Four';

function suma3(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'NaN';
    } else {
        if (Number.isInteger(num1) && Number.isInteger(num2)) {
            return num1 + num2;
        } else {
            return alert('ERROR: one or both number values are not integers. The resulting number rounded would be : ' + Math.round(num1 + num2));
        }
    }
}

console.log('Value number 1 is: ' + firstValue);
console.log('Value number 2 is: ' + secondValue);
console.log('Value number 3 is: ' + thirdValue);
console.log('Value number 4 is: ' + fourthValue);

console.log('The addition of value number 1 and value number 2 results in: ' + suma3(firstValue, secondValue));
console.log('The addition of value number 1 and value number 3 results in: ' + suma3(firstValue, thirdValue));
console.log('The addition of value number 1 and value number 4 results in: ' + suma3(firstValue, fourthValue));
console.log('The addition of value number 2 and value number 3 results in: ' + suma3(secondValue, thirdValue));
console.log('The addition of value number 2 and value number 4 results in: ' + suma3(secondValue, fourthValue));
console.log('The addition of value number 3 and value number 4 results in: ' + suma3(thirdValue, fourthValue));

// Exercise 6 - e
var tot1;
var tot2;
var tot3;
var valOne = 5;
var valTwo = 10;
var valThree = 3.14;

function validateIntOne(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return true;
    } else {
        return false;
    }
}

function suma4(num1, num2) {
    if (validateIntOne(num1, num2)) {
        return num1 + num2;
    } else {
        return alert('ERROR: one or both number values are not integers. The resulting number rounded would be : ' + Math.round(num1 + num2));
    }
}

tot1 = suma4(valOne, valTwo);
tot2 = suma4(valOne, valThree);
tot3 = suma4(valTwo, valThree);

console.log('Value A is: ' + valOne);
console.log('Value B is: ' + valTwo);
console.log('Value C is: ' + valThree);

console.log('Value A + Value B = ' + tot1);
console.log('Value A + Value C = ' + tot2);
console.log('Value B + Value C = ' + tot3);