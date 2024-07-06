// index.js

//  import the crypto module
const crypto=require('crypto');
//  get a commands using process.argv
const args=process.argv.slice(2);
const operation=args[0];
const numbers=args.slice(1).map(Number);
// complete the  function
function calculator(){
    switch (operation) {
        case'add':
        if(numbers.length<1) return console.log('Addition requires 2 numbers')
            const sum=numbers.reduce((acc,cur)=>acc+cur,0);
        console.log("Result",sum)
        break;

        case'sub':
        if(numbers.length<1) return console.log('Substraction requires 2 numbers')
            const sub=numbers.reduce((acc,cur)=>acc-cur,0);
        console.log("Result",sub)
        break;

        case'mult':
        if(numbers.length<1) return console.log('Multiplication requires 2 numbers')
            const mult=numbers.reduce((acc,cur)=>acc+cur,1);
        console.log("Result",mult)
        break;

        case'divide':
        if(numbers.length<1) return console.log('Division requires 2 numbers')
            const divide=numbers.reduce((acc,cur)=>acc+cur);
        console.log("Result",divide)
        break;
  
        default:
          console.log("Invalid operation");
      }
}
calculator()