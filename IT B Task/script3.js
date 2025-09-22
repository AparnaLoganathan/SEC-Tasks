let str="hello world";
let count=str.split("").filter(char=>"aeiouAEIOU".includes(char)).length;
console.log("Num of vowels in the string",count);