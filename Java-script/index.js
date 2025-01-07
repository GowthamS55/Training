const arr = [
  { name: "Gowtham", age: 12, place: "anthiyur", dep: "EEE", isMale: true },
];
for (let i = 0; i < arr.length; i++)  {
    arr[i].name = "kavin";
    arr[i].place = "erode";
  }
console.log(arr);
// arr[0].name="kavin";
// arr[0].place="erode";
// console.log(arr);


(1)
function checkEvenOdd(num) {
  console.log(num + (num % 2 == 0 ? " is Even" : " is Odd"));
}
checkEvenOdd(4);
checkEvenOdd(5);


(2)

for(count=1;count<=10;count++){
  console.log(count);
}

(3)

function Tables(num) {
  for (let i = 1; i <= 30; i++) {
    let multiple = num * i;
    console.log(multiple);
  }
}
let inputNumber = 3;
Tables(inputNumber);

(4)


function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) 
      return false;
  }
  return true;
 }
 console.log(isPrime(4));
 console.log(isPrime(5)); 

(5)

let sum=0
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log(sum);

(6)

function LargestNumber(arr){
  let largest = arr[0];
  for(let i=1;i<arr.length;i++){
      if(arr[i]>largest){
          largest=arr[i];
      }
  }
  return largest;
}
let number = [1,5,3,9,2];
let bignum=LargestNumber(number);
console.log(bignum);

(7)

function countVowels(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    for(let j = 0; j < vowels.length; j++) {
      if(char === vowels[j]) {
        count++;
      }
    }
  }
  return count;
 }
 console.log(countVowels("Hello World"));

 (8)

 function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let stars = ''; 
    for (let j = 1; j <= i; j++) { 
      stars += '*'; 
    }
    console.log(stars);
  }
}
printStars(5);

(9)

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) { 
    console.log("FizzBuzz"); 
  } else if (i % 3 == 0) { 
    console.log("Fizz"); 
  } else if (i % 5 == 0) { 
    console.log("Buzz");
  } else {
    console.log(i); 
  }
}

(10)

function reverseString(str) {
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
 }
 
 console.log(reverseString("hello"));
