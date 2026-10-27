//------------Factorial ------------------
// factorial 3
// let fact=1;
// for(let i=3; i>=1; i--){
//     fact=fact*i
// }
// console.log("fact = ",fact);

// // 2.factorial 4
// let fact=1;
// for(let i=4; i>=1; i--){
//     fact=fact*i
// }
// console.log("fact = ",fact);

// // 3.Factorial of 5
// let fact = 1;
// for (let i = 5; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log("fact = ", fact);

// // 4.Factorial of 6
// let fact = 1;
// for (let i = 6; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log("fact = ", fact);

// // 5.Factorial of 7
// let fact = 1;
// for (let i = 7; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log("fact = ", fact);


 // ---------- Fibnocci Series -----------
// 1 and 2
let a=1;
let b=2;
for(let i=1; i<=10; i++){
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}

// 10 and 20
let d=10
let e=20
for(let i=1; i<=10; i=i+1){
    console.log(a);
    let c=d+e;
    d=e
    e=c
}

// 2 and 3
let h = 2;
let i = 3;
for (let i = 1; i <= 10; i++) {
    console.log(a);
    let c = h + i;
    h = i;
    i = c;
}

// 3 and 7
let f = 3;
let g = 7;
for (let i = 1; i <= 10; i++) {
    console.log(a);
    let c = f + g;
    f = g;
    g = c;
}