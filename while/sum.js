// Display sum of the odd numbers from 81 to 131
let i = 81;
let sum = 0;
while (i <= 131) {
    if (i % 2 !== 0) {
        console.log(i);
        sum = sum + i;
    }
    i++
}
console.log('sum of all the odd numbers is', sum);

// Display sum of the all even numbers from 206 to 311
let i = 206;
let sum = 0;
while (i <= 311) {
    if (i % 2 === 0) {
        console.log(i);
        sum = sum + i
    }
    i++
}
console.log('sum of all the even numbers is', sum);
