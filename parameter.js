/*function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + ' i just wan to say ' + text);
  }
  
  showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessage('Ann', "What's up?"); // Ann: What's up? (**)


  function showMessagee(from, text, pay) { // parameters: from, text
    alert(from + ': ' + ' i just wan to say ' + text + pay);
  }
  
  showMessagee('Ann', 'Hello!', ' hope you are fine'); // Ann: Hello! (*)
  showMessagee('Ann', "What's up?", ' how are you'); // Ann: What's up? (**)


  function showMessageee(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessageee(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann


function showMessageeee(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessageeee("Ann"); // Ann: no text given
*/

let first = ('the flatform are getting better');
let second = first.replace('better', 'worse',);
console.log(second);

function sum(a, b){
  let result = a + b;
  return result;
}

let anza = sum(2, 20);
console.log (anza);