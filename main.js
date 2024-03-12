const prompt = require('prompt-sync')();
let gussingNumber = Math.floor(Math.random()*100+1);
console.log(gussingNumber);
let number =prompt("Enter a Number");
number = Number.parseInt(number);
let yourScore =100;

while(number!=gussingNumber){
  if(number<gussingNumber){
    console.log("You Entered a Smaller Number");
  }
  else{
    console.log("You Entered a Greater Number");   
  }
  number =prompt("Enter a Number");
  number = Number.parseInt(number);
  yourScore--;
}
console.log("Congratulations! your Guess is Correct");
console.log(`Your Score is ${yourScore}`);