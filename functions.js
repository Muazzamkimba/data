/*function sayhello(){ 
    console.log('whatsapp');
}

sayhello();


function sayhelloo(){
    console.log('whatsapps');
}
let r = sayhelloo;
r();



function muazzam(name){
    console.log('hello ' + name + '!');
}
muazzam ('kimba');
muazzam ('everyone');
muazzam ('tsandauri');


function latin(ages){
    console.log('the age of ' + ages + ' are 23 years')
}
latin('sulaimna');
latin ('liman');
latin ('jagora');
latin ('jigirya');
latin('nuaima');

function calculatetax(amount){
    let result = amount * 0.0825
    return result;
}

let tax = calculatetax(100);
console.log(tax);

/*function calculatetaxxx(amount){
    console.log(amount * 0.825);
}

let taxx = calculatetaxxx(100);
taxx();*/

console.log(100*100);


/*let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
*/


/*function sayhi(){
    alert('hello mr micheal');
}
//alert ('sayhi');
sayhi();
*/

/*
function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)
  

  */
  


  /*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
  */

  /*let age = prompt("What is your age?", 18);

  // conditionally declare a function
  if (age < 18) {
  
    function welcome() {
      alert("Hello!");
    }
  
  } else {
  
    function welcome() {
      alert("Greetings!");
    }
  
  }
  
 welcome();
*/

/*let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

*/

