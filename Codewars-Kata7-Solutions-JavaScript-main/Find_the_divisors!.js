/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/

function divisors(integer) {
  let result=[];
 // We only check up to integer / 2 because any divisor of integer greater than integer / 2 would be the integer itself, which we don't need.
  for(let i=2;i<=integer/2;i++){
    if(integer%i===0){
       result.push(i);
    }
  }
  return (result.length>0)?result:`${integer} is prime`;
}
