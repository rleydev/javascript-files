let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readmes = new WeakSet()

readmes.add(messages[0])
readmes.add(messages[1])

readmes.add(messages[1]) // read again 2d


alert("Read message 0: " + readmes.has(messages[0]))

messages.shift()