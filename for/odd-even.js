// Find the odd numbers from 61 to 100
for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log('odd number of 61 to 100 is', i);
    }
}

// Another way
for (let i = 61; i <= 100; i += 2) {
    console.log('odd number of 61 to 100 is', i);
}

// Reverse way
for (let i = 100; i >= 61; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Find all the even numbers from 78 to 98.
for (let i = 78; i<=98; i++){
    console.log(i);
    if(i% 2 === 0){
        console.log('even number of 78 to 98 is', i);
    }
}

// Another way
for (let i = 78; i <= 98; i+=2){
    console.log(i);
}