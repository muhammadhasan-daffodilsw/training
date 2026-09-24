let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
]

let viewCounter = new WeakMap();

for (let message of messages)
    {
    viewCounter.set(message,0);
    } 

function isRead(message)
{
    return viewCounter.get(message) == 0 ? "Unread":"Read";
}
function markRead(message)
{
    viewCounter.set(message,viewCounter.get(message)+1);
    return true;
}
console.log(isRead(messages[0]));
console.log(markRead(messages[0]));
console.log(isRead(messages[0]));
