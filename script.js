// Links JavaScript to HTML button.
document.getElementById('multiply').addEventListener('click', calculate)

// Sets the variables to default values.
let firstNumber = 0
let secondNumber = 0
let counter = 0
let answer = 0
let negative = false

// Sets commands for function.
function calculate () {
  firstNumber = document.getElementById('first').value
  secondNumber = document.getElementById('second').value
  firstNumber = parseInt(firstNumber)
  secondNumber = parseInt(secondNumber)
  answer = 0
  negative = false

  if (firstNumber < 0) {
    negative = !negative 
    firstNumber = Math.abs(firstNumber)
  }
  if (secondNumber < 0) {
    negative = !negative
    secondNumber = Math.abs(secondNumber)
  }

  for (counter = 0; counter <firstNumber; counter++) {
    answer = answer + secondNumber
  }
  if (negative) {
  answer = 0 - answer
  }
document.getElementById('answer').innerHTML = answer
}
