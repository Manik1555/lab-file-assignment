let a = parseInt(prompt("Enter first number:")); // q1
let b = parseInt(prompt("Enter second number:"));

console.log( + (a + b));
console.log( + (a - b));
console.log( + (a * b));
console.log( + (a / b));
 // q2

 let arr = [15, 42, 7, 89, 23];

console.log( + arr);
console.log( + Math.max(...arr));
console.log( + Math.min(...arr));

console.log( + arr.slice().sort((a, b) => a - b));
console.log( + arr.slice().sort((a, b) => b - a));


// q3

function validateForm(name, email, age) {
  if (name === "") {
    console.log("Name cannot be empty");
    return false;
  }

  let mailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(mailCheck)) {
    console.log("Invalid email format");
    return false;
  }

  if (age < 18 || age > 100) {
    console.log("Age must be between 18 and 100");
    return false;
  }

  console.log("Form is valid");
  return true;
}

// Example call:
validateForm("Rahul", "rahul@gmail.com", 22);

// q4
let student = {
  name: "Rahul",
  age: 20,
  grade: "B"
};

// Add new property
student.class = "12th";

// Update grade
student.grade = "A";

// Display all info
for (let key in student) {
  console.log(key + ": " + student[key]);
}


// q5
 function processNumbers(nums) {
  let even = nums.filter(n => n % 2 === 0);    // remove odd
  let doubled = even.map(n => n * 2);          // multiply by 2
  let sum = doubled.reduce((x, y) => x + y, 0); // find sum
  return sum;
}

let numbers = [1, 2, 3, 4, 5, 6];
let result = processNumbers(numbers);

console.log("Original numbers: " + numbers);
console.log("Final Sum: " + result);

