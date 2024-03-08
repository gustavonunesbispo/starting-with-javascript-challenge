alert("Hello World!");

let firstNumber = prompt("Digite o primeiro número: ");

if (!isNaN(firstNumber)) {
  alert("É um número.");
  firstNumber = Number(firstNumber);
} else {
  alert("Não é um número.");
}

if (typeof firstNumber === 'string') {
  alert("É uma string.");
} else {
  alert("Não é uma string.");
}

if (typeof firstNumber === 'boolean') {
  alert("É um dado booleano");
} else {
  alert("Não é um dado booleano");
}

if(firstNumber % 2 === 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

if(firstNumber % 2 !== 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}

let secondNumber = prompt("digite o segundo número: ")

if (!isNaN(secondNumber)) {
  alert("É um número.");
  secondNumber = Number(secondNumber);
} else {
  alert("Não é um número.");
}

if (typeof secondNumber === 'string') {
  alert("É uma string.");
} else {
  alert("Não é uma string.");
}

if (typeof secondNumber === 'boolean') {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

if(secondNumber % 2 === 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

if(secondNumber % 2 !== 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}

const sum = Number(firstNumber) + Number(secondNumber)
const sub = Number(firstNumber) - Number(secondNumber)
const mul = Number(firstNumber) * Number(secondNumber)
const div = Number(firstNumber) / Number(secondNumber)

alert(`A soma de ${firstNumber} + ${secondNumber} = ${sum}`)
alert(`A subtração de ${firstNumber} - ${secondNumber} = ${sub}`)
alert(`A multiplicação de ${firstNumber} * ${secondNumber} = ${mul}`)
alert(`A divisão de ${firstNumber} / ${secondNumber} = ${div}`)