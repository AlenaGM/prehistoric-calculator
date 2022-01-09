function showMessage(){;
    let name = prompt(`Как тебя зовут?`);
    alert(`Приятно познакомиться, ${name}! А я - Алена`);
  }

function addNumbers(){;
  let x = prompt(`Введи первое значение`);
  let y = prompt(`Введи второе значение`);
  if (confirm(`Твое первое значение = ${x}, а второе = ${y}?`)){
  alert(`${x} + ${y} будет ... (Скорее нажми "OK") `)}
  else {
    alert(`Что-то пошло не так. Попробуй еще раз"`)
  }
  alert(+x + +y);
}

function subtractNumbers(){;
  let x = prompt(`Введи первое значение`);
  let y = prompt(`Введи второе значение`);
  if (confirm(`Твое первое значение = ${x}, а второе = ${y}?`)){
  alert(`${x} - ${y} будет ... (Скорее нажми "OK") `)}
  else {
    alert(`Что-то пошло не так. Попробуй еще раз"`)
  }
  alert(x - y);
}

function multiplyNumbers(){;
  let x = prompt(`Введи первое значение`);
  let y = prompt(`Введи второе значение`);
  if (confirm(`Твое первое значение = ${x}, а второе = ${y}?`)){
  alert(`${x} * ${y} будет ... (Скорее нажми "OK") `)}
  else {
    alert(`Что-то пошло не так. Попробуй еще раз"`)
  }
  alert(x * y);
}

function divideNumbers(){;
  let x = prompt(`Введи первое значение`);
  let y = prompt(`Введи второе значение`);
  if (confirm(`Твое первое значение = ${x}, а второе = ${y}?`)){
  alert(`${x} / ${y} будет ... (Скорее нажми "OK") `)}
  else {
    alert(`Что-то пошло не так. Попробуй еще раз"`)
  };
  alert(x / y);
}


