/*
Write a function that checks if two non-negative integers make an "interlocking binary pair".

Interlock ?
numbers can be interlocked if their binary representations have no 1's in the same place
comparisons are made by bit position, starting from right to left (see the examples below)
when representations are of different lengths, the unmatched left-most bits are ignored
Examples
a = 9, b = 4

Stacking representations shows how they can interlock.

 9    1001
 4     100
Here, no 1's share any position, so the function returns true.


a = 3, b = 6

These representations do not interlock.

 3      11
 6     110
Finding they both have a 1 in the same position, the function returns false.

*/


const convertToBinary = function(number){
  let str='';
  number=BigInt(number);
  while(number){
    str+=String(number%BigInt(2));
    number=number/BigInt(2);
  }
  return str;
}

function interlockable(a, b) {
   const firstBinary=convertToBinary(a);
   const secondBinary=convertToBinary(b);
   console.log(firstBinary,secondBinary);
   for(let i=0;i<Math.min(firstBinary.length,secondBinary.length);i++){
         if(firstBinary[i]==='1'&&secondBinary[i]==='1')
            return false;
   }
   return true;
}
















