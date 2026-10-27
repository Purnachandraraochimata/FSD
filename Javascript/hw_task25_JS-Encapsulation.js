//1.example
class Car {
    #Brand;
    #Model;
    #Color;
    #Price;
    constructor(mybrand, mymodel, mycolor, myprice) {
        this.#Brand = mybrand;
        this.#Model = mymodel;
        this.#Color = mycolor;
        this.#Price = myprice;
    }
    getBrand() {
        return this.#Brand;
    }
    getModel() {
        return this.#Model;
    }
    getColor() {
        return this.#Color;
    }
    getPrice() {
        return this.#Price;
    }
    setBrand(newbrand) {
        this.#Brand = newbrand;
    }
    setModel(newmodel) {
        this.#Model = newmodel;
    }
    setColor(newcolor) {
        this.#Color = newcolor;
    }
    setPrice(newprice) {
        this.#Price = newprice;
    }
}
let car = new Car("Hyundai", "Aura", "White", 800000);
console.log("Before Updation");
console.log("My Brand :", car.getBrand());
console.log("My Model :", car.getModel());
console.log("My Color :", car.getColor());
console.log("My Price :", car.getPrice());
console.log("After Updation");
car.setBrand("Toyota");
car.setModel("Fortuner");
car.setColor("Black");
car.setPrice(3500000);
console.log("My Brand :", car.getBrand());
console.log("My Model :", car.getModel());
console.log("My Color :", car.getColor());
console.log("My Price :", car.getPrice());


//2.example
class BankAccount {
    #accountNumber;
    #accountHolder;
    #balance;
    constructor(myAccountNumber, myAccountHolder, myBalance) {
        this.#accountNumber = myAccountNumber;
        this.#accountHolder = myAccountHolder;
        this.#balance = myBalance;
    }
    getAccountNumber() {
        return this.#accountNumber;
    }
    getAccountHolder() {
        return this.#accountHolder;
    }
    getBalance() {
        return this.#balance;
    }
    setAccountNumber(newAccountNumber) {
        this.#accountNumber = newAccountNumber;
    }
    setAccountHolder(newAccountHolder) {
        this.#accountHolder = newAccountHolder;
    }
    setBalance(newBalance) {
        this.#balance = newBalance;
    }
    deposit(amount) {
        this.#balance = this.#balance + amount;

        console.log("Balance after deposit:", this.#balance);
    }
    withdraw(amount) {
        this.#balance = this.#balance - amount;

        console.log("Balance after withdrawal:", this.#balance);
    }
    checkBalance() {
        if (this.#balance >= 10000) {
            console.log("Balance is sufficient");
        } else {
            console.log("Balance is low");
        }
    }
}
let account = new BankAccount(1001, "Rahul", 25000);
console.log("Before Updation");
console.log("Account Number :", account.getAccountNumber());
console.log("Account Holder :", account.getAccountHolder());
console.log("Balance :", account.getBalance());
account.setAccountNumber(2001);
account.setAccountHolder("Kiran");
account.setBalance(30000);
account.deposit(5000);
account.withdraw(2000);
account.checkBalance();
console.log("After Updation");
console.log("Account Number :", account.getAccountNumber());
console.log("Account Holder :", account.getAccountHolder());
console.log("Balance :", account.getBalance());

//3 example
class Product {
    #productName;
    #productId;
    #price;
    constructor(myProductName, myProductId, myPrice) {
        this.#productName = myProductName;
        this.#productId = myProductId;
        this.#price = myPrice;
    }
    getProductName() {
        return this.#productName;
    }
    getProductId() {
        return this.#productId;
    }
    getPrice() {
        return this.#price;
    }
    setProductName(newProductName) {
        this.#productName = newProductName;
    }
    setProductId(newProductId) {
        this.#productId = newProductId;
    }
    setPrice(newPrice) {
        this.#price = newPrice;
    }
    addPrice(amount) {
        this.#price = this.#price + amount;

        console.log("Price after adding:", this.#price);
    }
    discount(amount) {
        this.#price = this.#price - amount;

        console.log("Price after discount:", this.#price);
    }
    checkPrice() {
        if (this.#price >= 10000) {
            console.log("Product is expensive");
        } else {
            console.log("Product is affordable");
        }
    }
}
let product = new Product("Laptop", 101, 50000);
console.log("Before Updation");
console.log("Product Name :", product.getProductName());
console.log("Product ID :", product.getProductId());
console.log("Price :", product.getPrice());
product.setProductName("Dell Laptop");
product.setProductId(202);
product.setPrice(55000);
product.addPrice(5000);
product.discount(3000);
product.checkPrice();
console.log("After Updation");
console.log("Product Name :", product.getProductName());
console.log("Product ID :", product.getProductId());
console.log("Price :", product.getPrice());