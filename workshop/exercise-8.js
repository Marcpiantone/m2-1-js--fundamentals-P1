// Q8
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000

// ANSWER: the number you should see in the console is 3127500

let sum = 0
for(let num=1;num<=5000;num++){
    if(num %4 ==0)
    sum += num
}
console.log(`The sum is ${sum}`)