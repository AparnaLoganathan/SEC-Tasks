let number = 12345;
let count = 0;
let temp = number;
while (temp > 0) {
  temp = Math.floor(temp / 10);
  count++;
}
console.log(`Number of digits in ${number} is: ${count}`);
