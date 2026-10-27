//Method over loading
// 1 example
class Car{
    start(){
        console.log("car started");
    }
    start(key){
        console.log("car started using",key);
    }
}
letbc=new Car()
b.start("Fortuner key")

// 2 example
class ShoppingCart {
    Product(product) {
        console.log( product);
    }
    Product(product, quantity) {
        console.log( product,quantity);
    }
}
let cart=new ShoppingCart()
cart.Product("Shirt",50)

// 3 example
class Mobile{
    call(number){
        console.log(number);
    }
    call(number,duration){
        console.log("Calling",number,"From",duration);
    }
}
let mob=new Mobile()
mob.call(9398397479,"10min")

// Method Over Riding

// 1st single inheritance  method overriding
class Bike{
    brand(){
        console.log("Royal Enfield");
    }
}
class Color extends Bike{
    color(){
        console.log("Black");
    }
}
let b=new Bike()
b.brand()
let c=new Color()
c.color()

// 2nd multilevel inheritance using runtime polymorphism
class Brand{
    Mobile(){
        console.log("Google");
    }
}
class Model extends Brand{
    Mobile(){
        console.log("Pixel 10");
    }
}
class Price extends Model{
    Mobile(){
        console.log(80000);
    }
}
class Storage extends Price{
    Mobile(){
        console.log("256GB");
    }
}
let t1=new Brand()
console.log("------Brand-----");
t1.Mobile()
let t2=new Model()
console.log("------Model-----");
t2.Mobile()
let t3=new Price()
console.log("-----Price------");
t3.Mobile()
let t4=new Storage()
console.log("-----Storage-----");
t4.Mobile()

// 3rd overriding using hierarchical
class Movie{
    Name(){
        console.log("Movie:RRR");
    }
}
class Director extends Movie{
    direct(){
        console.log("Director: S. S. Rajamouli")
    }
}
class Hero extends Director{
    hero(){
        console.log("Actor:Ram Charan");
    }
}
class Language extends Hero{
    lang(){
        console.log("World wide ");
    }
}
let movie=new Movie()
movie.Name()
let dir=new Director()
dir.direct()
dir.Name()
let obj=new Language()
obj.lang()
obj.direct()
obj.hero()
obj.Name()