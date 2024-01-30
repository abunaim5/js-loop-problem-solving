// Display sum of the odd number from 91 to 129
let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        sum = sum + i;
    }

}
console.log('sum of all odd numbers is', sum);

// Another way
// let sum = 0;
for (i = 91; i <= 129; i += 2) {
    console.log(i);
    sum = sum + i;
}
console.log('sum of all odd numbers is', sum);

// Display sum of all the even numbers from 51 to 85
let total = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        console.log(i);
        total = total + i;
    }
}
console.log('sum of all the even numbers is', total);

// Another way
// let total = 0;
for (let i = 52; i <= 85; i += 2) {
    console.log(i);
    total = total + i;
}
console.log('sum of all the even numbers is', total);