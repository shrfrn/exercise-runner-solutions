console.log('Ex 06')
console.log('Quadratic equation');
// reviewed ✔️

// 6. Read 3 variables from the user: a, b, c. These will be the a, b, c variables of a
// quadratic equation. ( (משוואה ריבועית
// a. Calculations for the solution of the quadratic equation:
// • Print to the console the value of “-b”
// • Print to the console the value of “2*a”
// • Print to the console the value of the discriminant. Discriminant=b*b-4*a*c
// b. BONUS:
// Now, a quadratic equation looks like:
// The two solutions for of this equation are X1 and X2:
// Your tasks:
// • Print the quadratic equation as a string to the console
// • Print the solutions of X1 and X2 to the console.
// Example: for the following equation: 2X² – 5x + 2 = 0
// Your inputs are: a=2, b=-5, c=2
// your output to the console should be:
// 2X² - 5x + 2 = 0
// x1 = 2 ; x2 = 0.5
// Hint: To print the x² to the console, use this: string: 'x\u00B2'

var a = +prompt('Enter variable a')
var b = +prompt('Enter variable b')
var c = +prompt('Enter variable c')

var minusB = -b
var doubleA = a * 2
var discriminant = b * b - (4 * a * c)

console.log('-b: ' + minusB)
console.log('2*a: ' + doubleA)
console.log('The discriminant is: ', discriminant)

//BONUS:
var equation = ''
var bOperator = ''
var cOperator = ''

if (a) {
    equation = a + 'x\u00B2'
}
if (b) {
    if (b > 0 && a) {
        bOperator = '+'
    }
    equation += bOperator + b + 'x'
}
if (c) {
    if (c > 0) {
        cOperator = '+'
    }
    equation += cOperator + c
}

console.log('The quadratic equation is: ' + equation)

var x1 = (minusB + discriminant ** 0.5) / doubleA
var x2 = (minusB - discriminant ** 0.5) / doubleA

console.log('x1: ', x1)
console.log('x2: ', x2)
