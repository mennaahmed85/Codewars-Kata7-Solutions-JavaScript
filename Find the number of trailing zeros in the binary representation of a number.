/*
Given a number n, find the number of trailing zeros in its binary representation.

Examples:
4  ->  2, because 4 is represented as 100
5  ->  0, because 5 is represented as 101
*/


function trailingZeros(n) {
  let str='';
  let numberOfZeros=0;
 while(n){
   str+=String(n%2);
   n=Math.floor(n/2);
 }
 console.log(str);
 for(let i=0;i<str.length;i++){
    if(str[i]==='0') 
      numberOfZeros++ 
    else 
       break;
 }
 return numberOfZeros;
}
