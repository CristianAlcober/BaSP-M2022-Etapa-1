// Exercise 2 - a
var wordOne = 'abcdefghij';

console.log('The string is : ' + wordOne);
console.log('In uppercase it would be : ' + wordOne.toUpperCase(wordOne));

// Exercise 2 - b
var fullWord = 'Strawberry';
var midWord = fullWord.substring(0,5);

console.log('The full word is: ' + fullWord);
console.log('The first five characters of the word together results in: ' + midWord);

// Exercise 2 - c
var fullPhrase = 'Appreciate';
var lastThree = fullPhrase.substring(7,10);

console.log('The full word is : ' + fullPhrase);
console.log('The last three characters of the word together results in: ' + lastThree);

// Exercise 2 - d
var originalWord = 'mOtIVAtiOn'; 
var updatedWord = originalWord.substring(0,1).toUpperCase() + originalWord.substring(1,10).toLowerCase();

console.log('The original word was: ' + originalWord);
console.log('Updated it is: ' + updatedWord);

// Exercise 2 - e
var sentenceOne = 'Chocolate Bar';
var spaceOne = sentenceOne.indexOf(' ');

console.log('The full sentence is: ' + sentenceOne);
console.log('The space between words is at the ' + (spaceOne + 1) +'th position.')

// Exercise 2 - f
var longSentence = 'pERFORming sUPERcaliFRAGILISTICexpialidocious';
var firstCharOne = longSentence.substring(0,1).toUpperCase();
var spacePosition = longSentence.indexOf(' ');
var followingTextOne = longSentence.substring(1,spacePosition).toLowerCase();
var firstCharTwo = longSentence.substring(spacePosition + 1,spacePosition + 2).toUpperCase();
var followingTextTwo = longSentence.substring(spacePosition + 2,longSentence.length - 1).toLowerCase();
var finalSentence = firstCharOne + followingTextOne + ' ' + firstCharTwo + followingTextTwo;

console.log('The original sentence was: ' + longSentence);
console.log('The updated sentence is: ' + finalSentence);



