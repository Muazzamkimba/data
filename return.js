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