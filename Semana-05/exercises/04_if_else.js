// Exercise 4 - a
var numOne = Math.random();

if (numOne >= 0,5) {
    console.log('Greater than 0,5');
} else {
    console.log('Lower than 0,5');
}

// Exercise 4 - b
var Age = Math.floor( Math.random() * 101 );

if (Age <= 2) {
    console.log('This person is a Baby, it has ' + Age + ' years old.');
} else if (Age > 2 && Age <= 12 ) {
    console.log('This person is a Kid, it has ' + Age + ' years old.');
} else if (Age >= 13 && Age <= 19) {
    console.log('This person is a Teenager, it has ' + Age + ' years old.');
} else if (Age >= 20 && Age <= 30) {
    console.log('This person is in its Youth, it has ' + Age + ' years old.');
} else if (Age >= 31 && Age <= 60) {
    console.log('This person is an Adult, it has ' + Age + ' years old.');
} else if (Age >= 61 && Age <= 75) {
    console.log('This person is an Elder, it has ' + Age + ' years old.');
} else if (Age > 75) {
    console.log('This person is an Old Person, it has ' + Age + ' years old.');
}