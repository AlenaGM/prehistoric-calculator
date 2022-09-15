function showMessage() {
  let name = prompt(`What is your name?`);
  alert(`Nice to meet you, ${name}! My name is Alёna`);
}

function addNumbers() {
  let x = prompt(`Enter first number`);
  let y = prompt(`Enter secons number`);
  if (confirm(`Your first number is ${x}, and your second number is ${y}?`)) {
    alert(`${x} + ${y} = ... (Hurry up! Press "OK"!)`);
  } else {
    alert(`Something went wrong. Try again`);
  }
  alert(+x + +y);
}

function subtractNumbers() {
  let x = prompt(`Enter first number`);
  let y = prompt(`Enter secons number`);
  if (confirm(`Your first number is ${x}, and your second number is ${y}?`)) {
    alert(`${x} - ${y} = ... (Hurry up! Press "OK"!)`);
  } else {
    alert(`Something went wrong. Try again`);
  }
  alert(x - y);
}

function multiplyNumbers() {
  let x = prompt(`Enter first number`);
  let y = prompt(`Enter secons number`);
  if (confirm(`Your first number is ${x}, and your second number is ${y}?`)) {
    alert(`${x} * ${y} = ... (Hurry up! Press "OK"!)`);
  } else {
    alert(`Something went wrong. Try again`);
  }
  alert(x * y);
}

function divideNumbers() {
  let x = prompt(`Enter first number`);
  let y = prompt(`Enter secons number`);
  if (confirm(`Your first number is ${x}, and your second number is ${y}?`)) {
    alert(`${x} / ${y} = ... (Hurry up! Press "OK"!)`);
  } else {
    alert(`Something went wrong. Try again`);
  }
  alert(x / y);
}
