let answer = parseInt(prompt('PLease enter the number you want to buzzfuzz'));
for (let i=1; i<=answer; i++){
    if (i%3===0 && i%5===0){
        console.log('buzzfuzz');}
        else if (i%3===0){console.log('bizz');}
        else if (i%5===0){console.log('fizz');}
        else console.log(i);
}


