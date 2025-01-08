(1)
function basicMathOperations(num1, num2) {
  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;

  

  console.log(sum);
  console.log(difference);
  console.log(product);
  console.log(quotient);
}
basicMathOperations(5, 3);


(2)

function checkNumber(num) {
    if (num > 10 && num % 2 === 0) {
        console.log(" Number is greater than 10 and divisible by 2");
    } else {
        console.log("Not Satify");
    }

}
checkNumber(12);   

(3)


let number = prompt("Enter the number for check");
console.log(number < 0 ? "Negative" : "Positive");

(4)

function checkNumberBrute(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkNumberBrute(4)); 
console.log(checkNumberBrute(7)); 

(5)
let percentage=parseFloat(prompt("Marks:"));
switch (true) {
    case (percentage >= 90 && percentage <= 100):
        grade = "A";
        break;
    case (percentage >= 80 && percentage < 90):
        grade = "B";
        break;
    case (percentage >= 70 && percentage < 80):
        grade = "C";
        break;
    case (percentage < 70):
        grade = "F";
        break;
    default:
}

(6)

let x = 5;
for (let i = 0; i <= 10; i++) {
    console.log(x * i);
}

(7)

function countDigits(number) {
    let count = 0;

    if (number == 0) {
        count = 1;
    } else {
        while (number > 0) {
            number = (number - (number % 10)) / 10; 
            count++; 
        }
    }

    console.log(count);
}
countDigits(12345);  

(8)

alert("Welcome to my website!");

(9)

function askToContinue() {
    let userResponse = confirm("Do you want to continue?");
    if (userResponse) {
        alert("You chose to continue!");
    } else {
        alert("You canceled!");
    }
}

(10)

let age=prompt("Enter your age:");

if (age<18) {
    alert("You are eligible!"); 
} else {
    alert("You are not eligible!"); 

}

(11)

let weight = prompt("Enter your weight in kilograms (kg):");
let height = prompt("Enter your height in meters (m):");
let bmi = weight / (height * height);
alert( bmi)

(12)

let input = "hello";  
let reversedString = "";  

for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i]; 
}
console.log(reversedString);  

(13)
function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++; 
        }
    }
    console.log("Number of vowels:", count);
}
countVowels("javascript"); 

(14)

function checkPalindrome(str) {
    str = str.toLowerCase();
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            console.log("false");
            return;
        }
        start++;
        end--;
    }
    console.log("true");
}
checkPalindrome("madam");
checkPalindrome("hello");


(15)
function extract(input) {
    let res = "";
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i).toUpperCase() === input.charAt(i) && input.charAt(i) !== " ") {
        res += input.charAt(i) + " . ";
      }
    }
    return res;
  }


(16)
let j="i love programming"
console.log(j.replace("programming","javascript"));

(17)

let name = "I love JavaScript";
let result = "";
for (let i = 0; i < name.length; i++) {
    if (name[i] !== " ") {
        result += name[i];
    }
}
console.log(result); 


(18)
let hey = "hello";
let character = "l";
let count = 0;

for (let i = 0; i < hey.length; i++) {
    if (hey[i] === character) {
        count++;
    }
}

console.log(count);  





