let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) {
        return undefined
    } else {
        return value
    } /* ваш код */
}));

/* в результате должно быть:
{
"title":"Совещание",
"occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
"place":{"number":23}
}
*/