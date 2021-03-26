document.getElementById('multiply').addEventListener('click', calculate)

let firstNumber = 0
let secondNumber = 0
let counter = 0
let answer = 0

function calculate () {
  answer = 0
  firstNumber = document.getElementById('first').value
  secondNumber = document.getElementById('second').value
  firstNumber = parseInt(firstNumber)
  secondNumber = parseInt(secondNumber)

  for (counter = 0; counter < firstNumber; counter++) {
    answer = answer + secondNumber
  }
  document.getElementById('answer').innerHTML = answer
}
