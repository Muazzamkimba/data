function sayhello(){ 
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
