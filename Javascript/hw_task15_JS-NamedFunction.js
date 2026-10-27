// 1.Named Function – Without Input & With Return
// 1. Return the smallest of two numbers.
function smallnum() {
    let a = 15;
    let b = 9;
    if (a < b) {
        return "A is smaller";
    } else {
        return "B is smaller";
    }
}
console.log(smallnum());

// 2. Return whether a number is positive, negative, or zero.
function checknumber() {
    let n = -5;
    if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checknumber());

// 3. Return the sum of numbers from 1 to 50.
function sumofnums() {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumofnums());

// 4. Return the product of numbers from 1 to 5.
function product() {
    let product = 1;
    for (let i = 1; i <= 5; i++) {
        product = product * i;
    }
    return product;
}
console.log(product());

// 5. Return the count of even numbers from 1 to 50.
function counteven() {
    let count = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(counteven());

// 6. Return the count of odd numbers from 1 to 50.
function countodd() {
    let count = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countodd());

// 7. Return the sum of odd numbers from 1 to 50.
function sumofodd() {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumofodd());

// 8. Return whether a number is divisible by 5.
function divisibleby5() {
    let n = 25;
    if (n % 5 == 0) {
        return "Divisible by 5";
    } else {
        return "Not divisible by 5";
    }
}
console.log(divisibleby5());

// 9. Return the largest of three numbers.
function largestthree() {
    let a = 10;
    let b = 25;
    let c = 15;
    if (a > b && a > c) {
        return "A is largest";
    } else if (b > a && b > c) {
        return "B is largest";
    } else {
        return "C is largest";
    }
}
console.log(largestthree());

// 10. Return the reverse of a number.
function reversenumber() {
    let n = 456;
    let rev = 0;
    while (n != 0) {
        let ld = n % 10;
        rev = rev * 10 + ld;
        n = parseInt(n / 10);
    }
    return rev;
}
console.log(reversenumber());

// 11. Return the sum of digits of a number.
function sumofdigits() {
    let n = 456;
    let sum = 0;
    while (n != 0) {
        let ld = n % 10;
        sum += ld;
        n = parseInt(n / 10);
    }
    return sum;
}
console.log(sumofdigits());

// 12. Return whether a number is a perfect number.
function perfect() {
    let n = 28;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        return "Perfect number";
    } else {
        return "Not a Perfect number";
    }
}
console.log(perfect());

// 13. Return the first 5 multiples of a number as a string.
function multiples() {
    let n = 7;
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += n * i + " ";
    }
    return output;
}
console.log(multiples());

// 14. Return the count of numbers divisible by 5 from 1 to 100.
function divby5() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(divby5());

// 15. Return the sum of numbers divisible by 3 from 1 to 30.
function sumdivby3() {
    let sum = 0;
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumdivby3());

// 2. Named Function – With Input & Without Return

// 1. Check whether a given number is positive, negative, or zero.
function checknumber(a) {
    if (a > 0) {
        console.log("Positive");
    } else if (a < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checknumber(-5);

// 2. Find the smallest of two numbers.
function smallestnum(b, c) {
    if (b < c) {
        console.log("b is smaller");
    } else {
        console.log("c is smaller");
    }
}
smallestnum(7, 12);

// 3. Find the largest of three numbers.
function largestthree(a, b, c) {
    if (a > b && a > c) {
        console.log("a is largest");
    } else if (b > a && b > c) {
        console.log("b is largest");
    } else {
        console.log("c is largest");
    }
}
largestthree(10, 25, 15);

// 4. Check whether a given number is divisible by 5.
function divisibleby5(n) {
    if (n % 5 == 0) {
        console.log("Divisible by 5");
    } else {
        console.log("Not divisible by 5");
    }
}
divisibleby5(25);

// 5. Print all even numbers between two given numbers.
function evennumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evennumbers(1, 20);

// 6. Print all numbers divisible by 3 between two given numbers.
function divby3(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
divby3(1, 30);

// 7. Find the sum of even numbers between two given numbers.
function sumEven(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
sumEven(1, 20);

// 8. Find the sum of odd numbers between two given numbers.
function sumOdd(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
sumOdd(1, 20);

// 9. Count the numbers divisible by 4 between two given numbers.
function countdiv4(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 4 == 0) {
            count += 1;
        }
    }
    console.log(count);
}
countdiv4(1, 40);

// 10. Print the squares of numbers from 1 to N.
function squares(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i * i);
    }
}
squares(5);

// 11. Print the cubes of numbers from 1 to N.
function cubes(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i ** 3);
    }
}
cubes(5);

// 12. Print the first N natural numbers in reverse order.
function reverseNatural(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}
reverseNatural(10);

// 13. Print numbers from N to M in reverse order.
function reverseRange(n, m) {
    for (let i = n; i >= m; i--) {
        console.log(i);
    }
}
reverseRange(10, 1);

// 14. Print the multiplication tables from 1 to N.
function tables(n) {
    for (let i = 1; i <= n; i++) {
        console.log("Table of", i);
        for (let j = 1; j <= 10; j++) {
            console.log(i, "X", j, "=", i * j);
        }
    }
}
tables(3);

// 15. Print a star square pattern.
function starSquare(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let j = 1; j <= n; j++) {
            output += "* ";
        }
        console.log(output);
    }
}
starSquare(5);


// 4. Named Function – With Input (Arguments) & With Return

// 1. Return the smallest of two numbers.
function smallof2(a, b) {
    if (a < b) {
        return "A is smaller";
    } else {
        return "B is smaller";
    }
}
console.log(smallof2(7, 12));

// 2. Return the largest of three numbers.
function larof3(a, b, c) {
    if (a > b && a > c) {
        return "A is largest";
    } else if (b > a && b > c) {
        return "B is largest";
    } else {
        return "C is largest";
    }
}
console.log(larof3(10, 25, 15));

// 3. Return the smallest of three numbers.
function smallof3(a, b, c) {
    if (a < b && a < c) {
        return "A is smallest";
    } else if (b < a && b < c) {
        return "B is smallest";
    } else {
        return "C is smallest";
    }
}
console.log(smallof3(10, 5, 15));

// 4. Return whether a number is positive, negative, or zero.
function checknum(a) {
    if (a > 0) {
        return "Positive";
    } else if (a < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checknum(-8));

// 5. Return whether a number is divisible by 5.
function divby5(a) {
    if (a % 5 == 0) {
        return "Divisible by 5";
    } else {
        return "Not divisible by 5";
    }
}
console.log(divby5(25));

// 6. Return the sum of even numbers within a given range.
function sumeven(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumeven(1, 20));

// 7. Return the sum of odd numbers within a given range.
function sumodd(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumodd(1, 20));

// 8. Return the count of even numbers within a given range.
function counteven(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(counteven(1, 20));

// 9. Return the count of odd numbers within a given range.
function countodd(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countodd(1, 20));

// 10. Return the sum of digits of a given number.
function sumdigits(a) {
    let sum = 0;
    while (a != 0) {
        let ld = a % 10;
        sum = sum + ld;
        a = parseInt(a / 10);
    }
    return sum;
}
console.log(sumdigits(987));

// 11. Return the product of digits of a given number.
function productdigits(a) {
    let product = 1;
    while (a != 0) {
        let ld = a % 10;
        product = product * ld;
        a = parseInt(a / 10);
    }
    return product;
}
console.log(productdigits(123));

// 12. Return the sum of numbers divisible by 3 within a range.
function sumdiv3(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 3 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumdiv3(1, 30));

// 13. Return the count of numbers divisible by 4 within a range.
function countdiv4(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 4 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countdiv4(1, 40));

// 14. Return the sum of squares from 1 to N.
function sumsquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i ** 2;
    }
    return sum;
}
console.log(sumsquares(5));

// 15. Return the sum of cubes from 1 to N.
function sumcubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i ** 3;
    }
    return sum;
}
console.log(sumcubes(5));

// 1. Named Function – Without Input & Without Return

// 1. Find the largest of three numbers.
function largestThree() {
  let a = 10;
  let b = 25;
  let c = 15;
  if (a > b && a > c) {
    console.log("A is largest");
  } else if (b > a && b > c) {
    console.log("B is largest");
  } else {
    console.log("C is largest");
  }
}
largestThree();

// 2. Find the smallest of two numbers.
function smallestTwo() {
  let a = 8;
  let b = 12;
  if (a < b) {
    console.log("A is smaller");
  } else {
    console.log("B is smaller");
  }
}
smallestTwo();

// 3. Print even numbers from 1 to 20.
function evenNumbers() {
  let n = 20;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenNumbers();

// 4. Print odd numbers from 1 to 20.
function oddNumbers() {
  let n = 20;
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
oddNumbers();

// 5. Find the sum of even numbers from 1 to 50.
function sumEven() {
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
sumEven();

// 6. Find the sum of odd numbers from 1 to 50.
function sumOdd() {
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
sumOdd();

// 7. Count the even numbers from 1 to 50.
function countEven() {
  let count = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      count += 1;
    }
  }
  console.log(count);
}
countEven();

// 8. Count the odd numbers from 1 to 50.
function countOdd() {
  let count = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      count += 1;
    }
  }
  console.log(count);
}
countOdd();

// 9. Print numbers from 10 to 1.
function reverseNumbers() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}
reverseNumbers();

// 10. Find the sum of numbers from 10 to 20.
function sumRange() {
  let sum = 0;
  for (let i = 10; i <= 20; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sumRange();

// 11. Print the squares of numbers from 1 to 10.
function squares() {
  let n = 10;
  for (let i = 1; i <= n; i++) {
    console.log(i * i);
  }
}
squares();

// 12. Print the cubes of numbers from 1 to 5.
function cubes() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    console.log(i ** 3);
  }
}
cubes();

// 13. Print numbers divisible by 5 from 1 to 50.
function divisibleBy5() {
  let n = 50;
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}
divisibleBy5();

// 14. Print the first 10 multiples of 3.
function multiplesOf3() {
  let n = 3;
  for (let i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}
multiplesOf3();

// 15. Print a star square pattern.
function starSquare() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let j = 1; j <= n; j++) {
      output += "* ";
    }
    console.log(output);
  }
}
starSquare();