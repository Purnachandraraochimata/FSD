// Without Input & Without Return
// 1. Print numbers from 20 to 1.
let num = function () {
    for (let i = 20; i >= 1; i--) {
        console.log(i);
    }
};
num();

// 2. Print all odd numbers from 1 to 50.
let odd = function () {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
};
odd();

// 3. Print numbers divisible by 5 from 1 to 100.
let divisible = function () {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
};
divisible();

// 4. Print the sum of numbers from 1 to 50.
let sum = function () {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        sum = sum + i;
    }
    console.log(sum);
};
sum();

// 5. Print a square star pattern of 5 rows and 5 columns.
let pattern = function () {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            output = output + "* ";
        }
        output = output + "\n";
    }
    console.log(output);
};
pattern();

// With Input & Without Return

// 1. Check whether a given number is Positive, Negative, or Zero.
let check = function (a) {
    if (a > 0) {
        console.log("Positive");
    }
    else if (a < 0) {
        console.log("Negative");
    }
    else {
        console.log("Zero");
    }
};
check(-5);

//2. Print the smallest of two given numbers.
let smallest = function (a, b) {
    if (a < b) {
        console.log(a, "is smaller");
    }
    else {
        console.log(b, "is smaller");
    }
};
smallest(10, 6);

//3. Print all even numbers between two given numbers.
let even = function (a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
};
even(10, 30);

//4 Print the sum of odd numbers between two given numbers.
let sumodd = function (a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    console.log(sum);
};
sumodd(1, 20);

//5 Print the squares of numbers from 1 to N.
let square = function (n) {
    for (let i = 1; i <= n; i++) {
        console.log(i, "square =", i * i);
    }
};
square(10);


// Without Input & With Return

//1 Return the sum of even numbers from 1 to 50.
let sumeven = function () {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumeven());

//2 Return the sum of odd numbers from 1 to 50.
let sumodds = function () {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumodd());

//3. Return the count of even numbers from 1 to 100.
let counteven = function () {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            count = count + 1;
        }
    }
    return count;
};
console.log(counteven());

//4. Return the sum of digits of a fixed number 9876.
let sumdigit = function () {
    let n = 9876;
    let sum = 0;
    while (n != 0) {
        let ld = n % 10;
        sum = sum + ld;
        n = parseInt(n / 10);
    }
    return sum;
};
console.log(sumdigit());

//5. Return the product of digits of a fixed number 234.
let productdigit = function () {
    let n = 234;
    let product = 1;
    while (n != 0) {
        let ld = n % 10;
        product = product * ld;
        n = parseInt(n / 10);
    }
    return product;
};
console.log(productdigit());

// With Input & With Return

//1. Return the smallest of three numbers.
let small = function (a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else {
        return c;
    }
};
console.log(small(10, 5, 8));

//2. Return whether a number is divisible by 3.
let div = function (a) {
    if (a % 3 == 0) {
        return "Divisible by 3";
    }
    else {
        return "Not divisible by 3";
    }
};
console.log(div(15));

// 3. Return the count of odd numbers between two given numbers.
let countodd = function (a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            count = count + 1;
        }
    }
    return count;
};
console.log(countodd(1, 20));

//4. Return the sum of numbers divisible by 5 between two given numbers.
let sumfive = function (a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 5 == 0) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumfive(1, 50));

//5. Return the sum of squares from 1 to N.
let sumsquare = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i * i;
    }
    return sum;
};

console.log(sumsquare(5));