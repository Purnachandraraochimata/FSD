// 1.Laptop
// class Laptop {
//   static brand = "Dell";
//   static company = "Dell Technologies";

//   constructor(id, model, processor, ram, price, color) {
//     this.laptopId = id;
//     this.laptopModel = model;
//     this.processor = processor;
//     this.ram = ram;
//     this.price = price;
//     this.color = color;
//   }

//   displayDetails() {
//     console.log("Brand ", Laptop.brand);
//     console.log("Company ", Laptop.company);
//     console.log("Laptop ID ", this.laptopId);
//     console.log("Model ", this.laptopModel);
//     console.log("Processor ", this.processor);
//     console.log("RAM ", this.ram);
//     console.log("Price ", this.price);
//     console.log("Color ", this.color);
//   }
// }

// console.log("----- Laptop 1 -----");
// let laptop1 = new Laptop(101, "Inspiron", "i5", "8GB", 55000, "Black");
// laptop1.displayDetails();

// console.log("----- Laptop 2 -----");
// let laptop2 = new Laptop(102, "Vostro", "i5", "16GB", 65000, "Silver");
// laptop2.displayDetails();

// console.log("----- Laptop 3 -----");
// let laptop3 = new Laptop(103, "XPS", "i7", "16GB", 95000, "White");
// laptop3.displayDetails();

// console.log("----- Laptop 4 -----");
// let laptop4 = new Laptop(104, "Latitude", "i3", "8GB", 45000, "Grey");
// laptop4.displayDetails();

//2.Bank
// class BankAccount {
//     static bankName = "HDFC Bank";
//     static bankCity = "Hyderabad";
//     constructor(number, name, type, balance, branch) {
//         this.accountNumber = number;
//         this.accountName = name;
//         this.accountType = type;
//         this.balance = balance;
//         this.branch = branch;
//     }

//     displayDetails() {
//         console.log("Bank Name ", BankAccount.bankName);
//         console.log("Bank City ", BankAccount.bankCity);
//         console.log("Account Number ", this.accountNumber);
//         console.log("Account Holder ", this.accountName);
//         console.log("Account Type ", this.accountType);
//         console.log("Balance ", this.balance);
//         console.log("Branch ", this.branch);
//     }
// }

// console.log("----- Account 1 -----");
// let account1 = new BankAccount(1001, "Rahul", "Savings", 25000, "Kukatpally");
// account1.displayDetails();

// console.log("----- Account 2 -----");
// let account2 = new BankAccount(1002, "Priya", "Savings", 40000, "Madhapur");
// account2.displayDetails();

// console.log("----- Account 3 -----");
// let account3 = new BankAccount(1003, "Arun", "Current", 75000, "Ameerpet");
// account3.displayDetails();

// console.log("----- Account 4 -----");
// let account4 = new BankAccount(1004, "Sneha", "Savings", 30000, "Banjara Hills");
// account4.displayDetails();

//3.Bus

// class Bus {
//   static busCompany = "TSRTC";
//   static busCity = "Hyderabad";

//   constructor(number, route, driver, seats, fare) {
//     this.busNumber = number;
//     this.route = route;
//     this.driver = driver;
//     this.seats = seats;
//     this.fare = fare;
//   }

//   displayDetails() {
//     console.log("Bus Company ", Bus.busCompany);
//     console.log("Bus City ", Bus.busCity);
//     console.log("Bus Number ", this.busNumber);
//     console.log("Route ", this.route);
//     console.log("Driver ", this.driver);
//     console.log("Seats ", this.seats);
//     console.log("Fare ", this.fare);
//   }
// }

// console.log("----- Bus 1 -----");
// let bus1 = new Bus("TS01A1234", "Hyderabad - Warangal", "Ramesh", 50, 250);
// bus1.displayDetails();

// console.log("----- Bus 2 -----");
// let bus2 = new Bus("TS01B2345", "Hyderabad - Vijayawada", "Suresh", 45, 350);
// bus2.displayDetails();

// console.log("----- Bus 3 -----");
// let bus3 = new Bus("TS01C3456", "Hyderabad - Karimnagar", "Mahesh", 50, 220);
// bus3.displayDetails();

// console.log("----- Bus 4 -----");
// let bus4 = new Bus("TS01D4567", "Hyderabad - Nizamabad", "Kiran", 45, 200);
// bus4.displayDetails();


// 4. Mobile Phone
// class Mobile {
//     static brand = "Samsung";
//     static country = "South Korea";
//     constructor(id, model, storage, ram, price, color) {
//         this.mobileId = id;
//         this.mobileModel = model;
//         this.storage = storage;
//         this.ram = ram;
//         this.price = price;
//         this.color = color;
//     }
//     displayDetails() {
//         console.log("Brand ", Mobile.brand);
//         console.log("Country ", Mobile.country);
//         console.log("Mobile ID ", this.mobileId);
//         console.log("Model ", this.mobileModel);
//         console.log("Storage ", this.storage);
//         console.log("RAM ", this.ram);
//         console.log("Price ", this.price);
//         console.log("Color ", this.color);
//     }
// }
// let mobile1 = new Mobile(101, "Galaxy A55", "128GB", "8GB", 35000, "Black");
// console.log("----- Mobile 1 -----");
// mobile1.displayDetails();
// let mobile2 = new Mobile(102, "Galaxy S24", "256GB", "8GB", 65000, "Blue");
// console.log("----- Mobile 2 -----");
// mobile2.displayDetails();
// let mobile3 = new Mobile(103, "Galaxy M35", "128GB", "6GB", 20000, "Green");
// console.log("----- Mobile 3 -----");
// mobile3.displayDetails();
// let mobile4 = new Mobile(104, "Galaxy S24 Ultra", "512GB", "12GB", 120000, "Grey");
// console.log("----- Mobile 4 -----");
// mobile4.displayDetails();

// 5. Restaurant
// class Restaurant {

//     static restaurantName = "Paradise";
//     static city = "Hyderabad";

//     constructor(id, name, type, rating, price, location) {
//         this.restaurantId = id;
//         this.restaurantName = name;
//         this.foodType = type;
//         this.rating = rating;
//         this.price = price;
//         this.location = location;
//     }

//     displayDetails() {
//         console.log("Restaurant Name ", Restaurant.restaurantName);
//         console.log("City ", Restaurant.city);
//         console.log("Restaurant ID ", this.restaurantId);
//         console.log("Name ", this.restaurantName);
//         console.log("Food Type ", this.foodType);
//         console.log("Rating ", this.rating);
//         console.log("Price ", this.price);
//         console.log("Location ", this.location);
//     }
// }

// let restaurant1 = new Restaurant(201, "Biryani House", "Indian", 4.5, 250, "Kukatpally");
// console.log("----- Restaurant 1 -----");
// restaurant1.displayDetails();

// let restaurant2 = new Restaurant(202, "Food Corner", "Chinese", 4.2, 300, "Madhapur");
// console.log("----- Restaurant 2 -----");
// restaurant2.displayDetails();

// let restaurant3 = new Restaurant(203, "Spice Hub", "Indian", 4.4, 200, "Ameerpet");
// console.log("----- Restaurant 3 -----");
// restaurant3.displayDetails();

// let restaurant4 = new Restaurant(204, "Tasty Bites", "Italian", 4.1, 350, "Gachibowli");
// console.log("----- Restaurant 4 -----");
// restaurant4.displayDetails();

// 6. Smart Phone Store Product
// class Product {
//   static storeName = "Croma";
//   static storeCity = "Hyderabad";

//   constructor(id, name, category, price, quantity, warranty) {
//     this.productId = id;
//     this.productName = name;
//     this.category = category;
//     this.price = price;
//     this.quantity = quantity;
//     this.warranty = warranty;
//   }

//   displayDetails() {
//     console.log("Store Name ", Product.storeName);
//     console.log("Store City ", Product.storeCity);
//     console.log("Product ID ", this.productId);
//     console.log("Product Name ", this.productName);
//     console.log("Category ", this.category);
//     console.log("Price ", this.price);
//     console.log("Quantity ", this.quantity);
//     console.log("Warranty ", this.warranty);
//   }
// }

// let product1 = new Product(301, "Sony TV", "Television", 45000, 10, "2 Years");
// console.log("----- Product 1 -----");
// product1.displayDetails();

// let product2 = new Product(302, "HP Mouse", "Accessories", 800, 25, "1 Year");
// console.log("----- Product 2 -----");
// product2.displayDetails();

// let product3 = new Product(303, "Canon Camera", "Camera", 55000, 5, "2 Years");
// console.log("----- Product 3 -----");
// product3.displayDetails();

// let product4 = new Product(304, "JBL Speaker", "Audio", 6000, 15, "1 Year");
// console.log("----- Product 4 -----");
// product4.displayDetails();