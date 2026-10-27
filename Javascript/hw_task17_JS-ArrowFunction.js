// Without Input & Without Return

//1 Print numbers from 20 to 1.
let nums = () => {
    for (let i = 20; i >= 1; i--) {
        console.log(i);
    }
};
nums();

//2. Print all even numbers from 1 to 40.
let even = () => {
    for (let i = 1; i <= 40; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
};
even();

//3. Print numbers divisible by 3 from 1 to 50.
let div = () => {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
};
div();

//4. Print the multiplication table of 7.
let multiply = () => {
    let a = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(a, "X", i, "=", a * i);
    }
};
multiply();

//5. Print the sum of numbers from 1 to 30.
let sum = () => {
    let sum = 0;
    for (let i = 1; i <= 30; i++) {
        sum = sum + i;
    }
    console.log(sum);
};
sum();

// With Input & Without Return

// 1 Print numbers from the first given number to the second given number.
let numbers = (a, b) => {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
};
numbers(5, 15);

//2 Print all odd numbers between two given numbers.
let odd = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
};
odd(10, 30);

//3. Print the sum of even numbers between two given numbers.
let sumeven = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
};
sumeven(1, 20);

//4. Print the squares from 1 to N.
let square = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i, "square =", i * i);
    }
};
square(10);

//5. Print the factors of a given number.
let factors = (n) => {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
};
factors(24);

// Without Input & With Return

//1. Return the sum of odd numbers from 1 to 100.
let sumodd = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumodd());

//2. Return the product of numbers from 1 to 5.
let product = () => {
    let product = 1;
    for (let i = 1; i <= 5; i++) {
        product = product * i;
    }
    return product;
};
console.log(product());

//3. Return the sum of digits of the fixed number 4567.
let sumdigit = () => {
    let n = 4567;
    let sum = 0;
    while (n != 0) {
        let ld = n % 10;
        sum = sum + ld;
        n = parseInt(n / 10);
    }

    return sum;
};
console.log(sumdigit());

//4. Return the product of digits of the fixed number 1234.
let productdigit = () => {
    let n = 1234;
    let product = 1;
    while (n != 0) {
        let ld = n % 10;
        product = product * ld;
        n = parseInt(n / 10);
    }
    return product;
};
console.log(productdigit());

//5. Return the count of odd numbers from 1 to 100.
let countodd = () => {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            count = count + 1;
        }
    }
    return count;
};
console.log(countodd());

// With Input & With Return

//1. Return the largest of three numbers.
let large = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
};
console.log(large(10, 25, 15));

//2. Return whether a number is Positive, Negative, or Zero.
let check = (a) => {
    if (a > 0) {
        return "Positive";
    }
    else if (a < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
};
console.log(check(-10));

//3. Return the sum of digits of a given number.
let sumdigits = (a) => {
    let sum = 0;
    while (a != 0) {
        let ld = a % 10;
        sum = sum + ld;
        a = parseInt(a / 10);
    }
    return sum;
};
console.log(sumdigit(456));

//4. Return the count of digits in a given number.
let countdigit = (a) => {
    let count = 0;
    while (a != 0) {
        let ld = a % 10;
        count = count + 1;
        a = parseInt(a / 10);
    }
    return count;
};
console.log(countdigit(98765));

//5. Return the sum of numbers between two given numbers.
let sumrange = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum = sum + i;
    }
    return sum;
};
console.log(sumrange(1, 10));