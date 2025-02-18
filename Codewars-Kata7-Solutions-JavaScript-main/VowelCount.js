/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  const vowels='aeiou';
  let sum=0;
  for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i]))
         sum++;
  }
  return sum;
}
