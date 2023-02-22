
const truncate = (str, mLength) => {
    return (str.length > mLength) ? str.slice(0, mLength - 1) + '…' : str;
}
  

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"