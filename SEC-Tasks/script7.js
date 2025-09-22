let numbers = [12, 45, 7, 89, 23];
let largest = Math.max(...numbers);

let withoutLargest = numbers.filter(num => num !== largest);
let secondLargest = Math.max(...withoutLargest);

console.log("Second largest number in the array:", secondLargest);
