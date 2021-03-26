// Links JavaScript to HTML button.
document.getElementById('multiply').addEventListener('click', calculate)

// Sets the variables to default values.
let firstNumber = 0
let secondNumber = 0
let counter = 0
let answer = 0

// Sets commands for function.
function calculate () {
  answer = 0
  firstNumber = document.getElementById('first').value
  secondNumber = document.getElementById('second').value
  firstNumber = parseInt(firstNumber)
  secondNumber = parseInt(secondNumber)
  if (firstNumber < 0) {
    for (counter = 0; counter > firstNumber; counter--) {
      answer = answer - secondNumber
    }
    document.getElementById('results').innerHTML = answer
  } else if (firstNumber > 0 || secondNumber > 0) {
    for (counter = 0; counter < firstNumber; counter++) {
      answer = answer + secondNumber
    }
    document.getElementById('results').innerHTML = answer
  }
