// Exercise 5 - a
let names = new Array('chocolate', 'strawberry', 'vanilla', 'lemon', 'apple');

for (var i = 0; i <= 4; i++) {
    console.log('The flavor number ' + (i+1) + ' is ' + names[i]);
}

// Exercise 5 - b
var long = 0;

for (var i = 0; i <= 4; i++) {
    long = names[i].length + 1;
    console.log('The flavor number ' + (i+1) + ' is ' + names[i].substring(0,1).toUpperCase() + names[i].substring(1,long));
}

// Exercise 5 - c
var sentence = '';

for (var i = 0; i <= 4; i++) {
    sentence = sentence.concat(names[i]);
}

alert('The full sentence is: ' + sentence);

// Exercise 5 - d
let nums = new Array();

for (var i = 0; i <= 9; i++) {
    nums[i] = i;
}

for (var i = 0; i <= 9; i++) {
    console.log('The number in the position number ' + i + ' is: ' + nums[i]);
}