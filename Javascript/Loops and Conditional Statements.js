// For Loop

//Count how many numbers from 200 down to 50 are divisible by 7.
// let count=0
// for(let i=200; i>=50; i--){
//     if(i%7==0){
//        count=count+1
//     }
// }
// console.log("count 200 t0 50 divisible by 7",count);

//Print numbers from 120 down to 20 that are not divisible by 5.
// let count=0
// for(let i=120; i>=20; i--){
//     if(i%5!=0){
//        count=count+1
//     }
// }
// console.log("120 t0 20 is not divisible by 5 :",count);

//Find the average of all even numbers in the range from 10 to 100.
// let sum=0
// let count=0
// for(let i=10; i<=100; i++){
//     if(i%2==0){
//         sum=sum+i
//         count=count+1
//     }
// }
// let avg=sum/count;
// console.log("avg of all even number range 10 to 100 : ",avg);

//Print all numbers from 10 to 150 that are divisible by both 3 and 5.
// for(let i=10; i<=150; i++){
//     if(i %3==0 || i % 5==0){
//         console.log(i);
//     }
// }

// Find the Average of All Factors of a Given Number.
// let sum=0
// let count=0
// for(let i=1; i<=8; i++){
//     if(8%i==0){
//         sum=sum+i
//         count=count+1
//     }
// }
// let avg=sum/count;
// console.log("avg of all factor given number = ",avg);



// If-else

// //1.check given number 3 digit or not
// let n=300
// if(n>=100 && n<=400){
//     console.log(" is a 3 digit number");
// }else{
//     console.log("not a 3 digit number");
// }

// //2.divisible by 3 and 5 or not
// let x=18
// if(x%3==0&&x%5==0){
//     console.log("it divisible by 3 and 5 or not");
// }else{
//     console.log("it is not divisible by 3 and 5 or not");
// }

// //3.Check whether a given triangle is a valid triangle or not.
// let a=5;
// let b=6;
// let c=7;
// if(a+b>c && b+c>a && a+c>b){
//     console.log("valid triangle");
// }else{
//     console.log("in valid traingle");
// }

// //4.Check whether a given number is a multiple of 10 or not.
// let y=15
// if(y%5==0){
//     console.log("it is multiple of 10");
// }else{
//     console.log("it is not multiple of 10");
// }



//If-Else-If

// //1.Check the type of triangle based on its sides.
//         //Equilateral, Isosceles, or Scalene.
// let a = 10;
// let b = 10;
// let c = 10;
// if (a == b && b == c) {
//     console.log("Equilateral Triangle");
// }
// else if (a == b || b == c || a == c) {
//     console.log("Isosceles Triangle");
// }
// else {
//     console.log("Scalene Triangle");
// }

// // 2.Calculate the electricity bill based on units consumed.
//     //0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.
// let units = 250;
// let bill;
// if (units <= 100) {
//     bill = units * 2;
// }
// else if (units <= 200) {
//     bill = units * 3;
// }
// else if (units <= 300) {
//     bill = units * 5;
// }
// else {
//     bill = units * 7;
// }
// console.log("Electricity Bill = ₹" + bill);

// //3.Display the age category.
//     //Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
// let age = 25;
// if (age < 13) {
//     console.log("Child");
// }
// else if (age <= 19) {
//     console.log("Teenager");
// }
// else if (age <= 59) {
//     console.log("Adult");
// }
// else {
//     console.log("Senior Citizen");
// }

// //4.Calculate the discount based on shopping amount.
// //Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
// let amount = 6000;
// let discount;
// if (amount < 1000) {
//     discount = 0;
// }
// else if (amount < 5000) {
//     discount = 10;
// }
// else if (amount < 10000) {
//     discount = 20;
// }
// else {
//     discount = 30;
// } 
//    let discountAmount = amount * discount / 100;
//   let finalAmount = amount - discountAmount;
// console.log("Discount = " + discount + "%");
// console.log("Discount Amount = ₹" + discountAmount);
// console.log("Final Amount = ₹" + finalAmount);

// //5.Display the season based on the month number.
// //3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
// let month = 7;
// if (month >= 3 && month <= 5) {
//     console.log("Spring");
// }
// else if (month >= 6 && month <= 8) {
//     console.log("Summer");
// }
// else if (month >= 9 && month <= 11) {
//     console.log("Autumn");
// }
// else if (month == 12 || month == 1 || month == 2) {
//     console.log("Winter");
// }
// else {
//     console.log("Invalid Month");
// }

// // 6.Check whether a given year is a Leap Year or not.
//     //Condition 1: year % 400 == 0
//     //Condition 2: year % 4 == 0 and year % 100 != 0
// let year = 2024;
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//     console.log("Leap Year");
// }else {
//     console.log("not a leap year");
// }



// // Nested-If

// //1.Check whether a person is eligible to donate blood.
// //Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
// let age=18
// let weight=61
// if(age>=18 && age<=60){
//     if(weight>50){
//         console.log("eligible to donate blood");
//     }
//     else{
//         console.log("if eligible by age weight should be above 50kg");
//     }
// }else{
//     console.log("not eligible donate blood age should between 18 and 60")
// }

// // 2.Display the grade based on average only if the student has passed in all 4 subjects.
// let tel=90;
// let eng=91;
// let math=30;
// let social=92;
// if(tel>=35 && eng>=35 && math>=35 && social>=35){
//     let average =(tel + eng + math + social)/4
//     if(average>=90){
//         console.log("Grade A ");
//         console.log("EXcellent all passed");
//     }else if(average>=75){
//         console.log("Grade B ");
//         console.log("Good passed all");
//     }else if(average>=60){
//         console.log("Grade C ");
//         console.log("avg passed all");
//     }else{
//         console.log("Grade D ");
//         console.log("border passed");
//     }
// }else{
//     console.log("student faild the one subject ");
//     console.log("better luck next time 🥹🥹");
// }

// //3.eligible for d=scolorship age should be 18 and score should be above 86
// let agee=23
// let score=88
// if(agee>=18){
//     if(score>86){
//         console.log("eligible for scholor ship");
//     }else{
//         console.log("if eligible by age. score should be above 86");
//     }
// }else{
//     console.log("eligible for scholor ship age should above 18");
// }