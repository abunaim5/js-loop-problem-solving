// Multiplication table for number 9
let multi = 9;
for (let i = 1; i <= 10; i++) {
    console.log(i);
    multiTable = multi * i;
    console.log(multi, '*', i, '=', multiTable);
}

// Another way
let n = 9;
for (let i = 1; i <= 10; i++) {
    console.log(n, '*', i, '=', n * i);
}

// Using function for this problem
// let n = 9;
function getTable(n, i = 1) {
    if (i === 11)
        return;
    console.log(n + '*' + i + '=' + n * i);
    i++
    getTable(n, i);
}
getTable(n);