const myTextt = ("The weather is cold");
const newStringg = myTextt.replace("cold", "warm");
console.log(newStringg); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


function myfavouriteanimal(animal){
    return animal + ' is my favourite animal!'
}
console.log(myfavouriteanimal ('goat'));

function showMessage() {
  alert( 'Hello everyone!' );
}
showMessage();
showMessage();


function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!



let userName = 'John';

function showMessagee() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessagee(); // Hello, John



let userNamee = 'Johnn';

function showMessageee() {
  userNamee = "Bobe"; // (1) changed the outer variable

  let message = 'Hello, ' + userNamee;
  alert(message);
}

alert( userNamee ); // John before the function call

showMessageee();

alert( userNamee ); // Bob, the value was modified by the function