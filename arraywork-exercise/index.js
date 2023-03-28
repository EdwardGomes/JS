//Array Work

// Using 'map' write a function that converts farenheit to celcius.
//ex: getCelsius([25, 148, 212, 41]) -> [-5, 60, 100, 5]

let farenheit = [80, 65, 73, 200]
function getCelsius() {
     return farenheit.map(temperatura => (temperatura - 32) * 5/9)
}  

//Using 'some' write a function that checks an array for a 'false' value
//ex: CechForFalse([11, NaN, [], 'Angels']) => true

const array = [11, NaN, [], 'Angels']
function checkForFalsey() {
    return array.some(item => !item)
}

//Using 'reduce' write a function that will return the total
//numbers or characters in an array of strings
//ex: getTotal(['Rabbit', 'Football', 'Cracking']) => 22

const words = ['Rabbit', 'Football', 'Cracking']
function getTotal() {
    return words.reduce((total, word) => total + word.length, 0)
}

//Using 'every' write a function that checks wheter every
//number in an array is a square number.
//ex: checkSquares([9, 16, 81] => true)

const squareNumbers = [9, 16, 80]
function checkSquares() {
    return squareNumbers.every(number => Math.sqrt(number) % 1 ===0)
}

//Using an array method, write a function that return the string
//elements of an array that have a given length or larger.
//ex: getWords(['Florida', 'dog', 'phone',], 5) => ['Florida', 'Phone']

function getWords(array, number) {
    return array.filter(word => word.length >= number)
}
//console.log(getWords(['Florida', 'dog', 'phone'], 5))

//Using an array method, write a function that converts an arraywork
// of cm values as string, into an array of numbers.
//ex: getValues(['23cm', '5.6cm', '1000cm']) => [23, 5.6, 1000]

function getValues(array) {  
    return array.map(value => parseFloat(value))
}
//console.log(getValues(['65cm', '93cm', '20cm', '35cm']))

//Using 'split and 'filter' write a function that counts the
//number of vowels in a sentence.
//ex: getVowelCount('In West Philadelphia, born and raised') => 12

const saying = 'In West Philadelphia, born and raised' 
const vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function getVowelCount() {
  return saying.split('').filter(letter => vowels.includes(letter)).length
}

//Using 'split', 'map' and 'join' write a function that capitalises the first letter of each word in a sentence.
//ex: capitalise('the queens gambit') => 'The Queens Gambit'

function capitalise(sentence) {
   return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}
console.log(capitalise('monteiro lobato'))