/*
This is related to my other Kata about cats and dogs.

Kata Task
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

Results are truncated whole numbers of "human" years
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

let countYears = function(Year,type) {
  let result=0;
  if(Year>=15) {
    result++;
    Year-=15;
     if(Year>=9){
        result++;
        Year-=9;
        if(Year>0){
          if (type==='cat') 
             result+=Math.floor(Year/4) 
          else
            result+=Math.floor(Year/5);
        }
     }
  }
     return result;
}


var ownedCatAndDog = function(catYears, dogYears) {
  return [countYears(catYears,'cat'),countYears(dogYears,'dog')];
}


