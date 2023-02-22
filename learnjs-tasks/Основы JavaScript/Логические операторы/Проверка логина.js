let userName = prompt(`Кто там?`, ``);

if (userName === `Админ`) {

  let pass = prompt(`Пароль?`, ``);

  switch (pass) {
    case (pass === `Я главный`):
        alert( `Здравствуйте!` );
    case (pass ===``|| pass === null):
        alert( `Отменено` );
    default:
        alert( `Неверный пароль` );
  }

} else if (userName === `` || userName === null) {
  alert( `Отменено` );
} else {
  alert( `Я вас не знаю` );
}