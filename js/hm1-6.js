

///////////////-----go-it----hm1//////
///////////////////////////////////////////PRACTIC
// const quantity = 17;
// console.log(typeof quantity);

// const message = "java Script is awesome!"
// console.log(typeof message);

// const isSideBarOpen = false;
// console.log(typeof isSideBarOpen);

// let username;
// console.log(username);

// let status = null;
// console.log(typeof status);

// const x = 5;
// const y = 20;
// console.log(x + y);

// const q = 4;
// const w = 40;
// console.log(w - q);

// const age = 43;
// const message = "Polly is " + age + "years old";
// console.log(message)


// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(lastElementIndex)

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic.length - 1;
// console.log([lastElement])

// function add(a, b, c) {
//   const result = a + b + c
//   console.log(`Addition result equals  ${result}`);
// }
// add(15, 20, 45)

// function multiply(x, y, z) {
//   const product = x * y * z;
//   return product;
// }

// const result = multiply(2, 3, 4);
// console.log(result);

// function multiply(x, y, z) {
//   console.log('The code before return is executed as usual!');
//   return x * y * z;
//   console.log('This code is never executed because is after return')
// };
// console.log(multiply(2, 3, 5))

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`)
// }
// console.log('Log before multiply execution')
// multiply(3, 5, 7);
// console.log("Log after multiply execution")

// console.log("A");
// function logStuff() {
//    console.log("B")
// }
// console.log("C");
// logStuff();
// console.log("D")


// function foo() {
//   const value = "I`m a global variable";
//   console.log(value);
// }
// foo();
// console.log(value)


// function calculateTotalPrice(orderQuantity, pricePerItem) {
//   const totalPrice = orderQuantity * pricePerItem;
//   return totalPrice;
// }
// console.log(calculateTotalPrice(5, 100))

///////////////////HOME WORK 1
// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return ` You ordered ${quantity} droids worth ${totalPrice} credits!`
// }
// console.log(makeTransaction(5, 3000));


// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price * deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Ukraine", 130, 60))


// function getElementWidth(content, padding, border) {
//   const result = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
//   return result
// }
// console.log(getElementWidth("50px", "8px", "4px"))




/////////////-----go-it---- hm2///////
////////////////////////////////////////Practic

//GLOBAL
//const value = "I`m a global variable";
// function foo() {
//   const value = "I`m a global variable";
//   console.log(value);
// }
// foo();
// console.log(value)

//LOCAL
// function foo() {
// const value = "I`m a local variable";
// console.log(value);
// }
// console.log(value)


// const globalVar = "global";
// console.log(globalVar)

// if (true) {
//   const aVar = "A";
//   console.log(globalVar);
//   console.log(aVar)

//   if (true) {
//     const bVar = "B";
//     console.log(globalVar)
//     console.log(aVar)
//     console.log(bVar)
//   }
// }
// console.log(globalVar);
// if (true) {
//   const cVar = "C";
//   console.log(globalVar);
//   console.log(aVar);
//   console.log(bVar);
//   console.log(cVar)
// }
/////Logic operotors
// if (null) {
//   console.log("Block If")
// } else {
//   console.log("Block else")
// }//else

// if (0) {
//   console.log("Block if")
// } else {
//   console.log("block else")
// }//else

// if (5) {
//   console.log("block If")
// } else {
//   console.log("block else")
// }//if


///LOGIC &&
// console.log("hello" && 5);
// console.log( 5 && "hello")

// const a = 20;
// console.log(a > 10 && a < 30)

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm) {
//   console.log("<mobile screen")
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log("tablet screen")
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log("Desktop screen")
// } else {
//   console.log("Godzilla")
// }

///////Unari !
// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// if (canChat) {
//   console.log("Can type in chat")
// } else {
//   console.log("Blocked from typing in chat")
// }


////////////////METHOD/////////////////GOIT 3 MOdule

//toUpperCAse
// const message = "Java Script is awesome"
// console.log(message.toUpperCase())

// const brandName = "samsung";
// const userInput = "sAmSunG";
// const lowerCaseInput = userInput.toLowerCase()
// console.log(lowerCaseInput)

//slice
// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 3))//Jac
// console.log(fullName.slice(3, 8))//ob Me
// console.log(fullName.slice())//Jacob Mercer

//includes
// const message = "Please buy our stuff!";
// const hasSpan = message.includes("buy");

// if (hasSpan) {
//   console.log("Warning: This message contains forbidden words!")
// }

//indexOf
// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index)

//array
// const planets = ['Earth', 'Mars', 'Venus'];
// const firstElement = planets[0];
// console.log(firstElement)

//перевизначення
// const planets = ['Earth', "Mars", 'Venus', "Uranus"];
// planets[0] = "Jupiter";
// console.log(planets.length)

//індекс останнього ел
// const planets = ['Earth', 'Mars', 'Venus'];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex])

// const a = ['Mango', 'Poly'];
// const b = a;
// a[2] = 'Amanda';
// console.log(a);
// console.log(b)

//перетворення масиву
// const array = [1, true, 'Poly'];
// console.log(String(array))

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// console.log(Boolean(emptyArray))
// console.log(Boolean(nonEmptyArray));


//методи масивів
//join
// const words = ["JavaScript", "is", "awesome"];
// console.log(words.join(" "))
 
//split
// const name = "Poly";
// const letters = name.split('');
// console.log(letters)


//slice
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(2, 4);
// console.log(result)


//concat
// const firstArray = ["Mercury", 'Venus'];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);
// console.log(result)

//indexOf
// const clients = ["Mango", "Ajaix", 'Oliver'];
// console.log(clients.indexOf("Mango"))

//push
// const planets = ["Earth", "Mars", "Jupiter", "Saturn"];
// planets.push("Moon");
// console.log(planets)

// const tags = [];
// for (let i = 0; i < 3; i += 1){
//   tags.push(`tag-${i}`)
// }
// console.log(tags)


// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i += 1){
//   console.log(planets[i])
// }


//for  цикли
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
// total =+order[i]
//   }
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function getEvenNumbers(start, end) {
//   let number = [];
//   for (let i = start; i <= end; i++){
//     if (i % 2 === 0) {
//       number.push(i)
//     }
//   }
//   return number;
// }

//array includes
// const fruits = ["banana", "orange", "apple"];
// if (fruits.includes("kiwi")) {
//   console.log("The array has an element banana")
// } else {
//   console.log("Array does not contain kiwi element")
// }

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     console.log(`${item} is available to order`);
//   } else {
//     console.log("Sorry! We are out of stock");
//   }
// }
// checkStorage(["apple", "plum", "pear"], "plum");

//for
// for (let i = ("start" in window ? window.start : 0); i < 9; i++){
//   console.log(i)
// }

//for of
// const planets = ["Earth", "Mars", "Venus"];
// for (const planet of planets) {
//   console.log(planet)
// };

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//////////FUNCTION arguments
// function multiply() {
//   let total = 1;
//   for (const arg of arguments) {
//     total *= arg;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3))

//arrayFrom()
// function foo() {
//   const args = Array.from(arguments);
//   return args.join("-");
// }
// foo(4, 6, 7);

// function greet(username = "Guest") {
//   console.log(`Hello, ${username}`)
// }
// greet("Kate")

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);
//   for (let i = from; i <= to; i += step){

//   }
// }
// count(1, 15, 4)

//function expression
// const multiply = function (x, y, z) {
//   console.log(x * y * z)
// }
// multiply(4, 5 , 6)
// multiply(7, 3, 4);
// function multiply(x, y, z) {
//   console.log(x * y * z)
// }
// multiply(8, 9, 2);
/////////////////////////////HW 3
// function slugify(title) {
//  return  title.toLowerCase().split(" ").join("-");
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// function makeArray(firstArray, secondArray, maxLength) {
//  const totalArr = firstArray.concat(secondArray);
//   if (totalArr.length > maxLength) {
//     return totalArr.slice(0, maxLength);
//   } else {
//     return totalArr;
//   }
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   let elem = [];
//   for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > value) {
//       elem.push(numbers[i])
//     }
//   }
//   return elem;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]









/*
function makeTransaction(quantity, pricePerDroid, customerCredits){
    let total = quantity * pricePerDroid;toy
    if( total > customerCredits){con
      return "Insufficient funds!";
    } 
     return `You ordered ${quantity} droids worth ${total} credits!`
    }
    console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
    console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
    console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
    console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
    console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
    */
    
    /*
    function formatMessage(message, maxLength){
      if (message <= maxLength){
        return message;
      }
      return `${message.slice(0, maxLength)}`;
    }
    
    console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
    console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
    console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
    console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla
    */
    
    /*
    function checkForSpam(message){
    if (message.toLowerCase().includes(`spam`) || message.toLowerCase().includes(`sale`)){
      return true;
    }
    return false;
    }
    
    console.log(checkForSpam("Latest technology news")); // false
    console.log(checkForSpam("JavaScript weekly newsletter")); // false
    console.log(checkForSpam("Get best sale offers now!")); // true
    console.log(checkForSpam("Amazing SalE, only tonight!")); // true
    console.log(checkForSpam("Trust me, this is not a spam message")); // true
    console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
    console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
    
    
    function getShippingCost(country) {
      switch (country) {
        case `China`:
          return `Shipping to ${country} will cost ${100} credits`;
        case `Chile`:
          return `Shipping to ${country} will cost ${250} credits`;
        case `Australia`:
          return `Shipping to ${country} will cost ${170} credits`;
        case `Jamaica `:
          return `Shipping to ${country} will cost ${120} credits`;
      }
    }
    console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
    console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
    console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
    console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
    console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
    console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
    */






////// go-it 3 модуль / домашня //////
/*
function slugify(title){
let slug = title.split(" ").join("-")

return slug.toLowerCase();
}


console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
*/

/*
function makeArray(firstArray, secondArray, maxLength){
    let newArray = firstArray.concat(secondArray);
    if( newArray.length < maxLength){
    }
return newArray.slice(0, maxLength)

}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
*/
/*
function filterArray(numbers, value) {
let newNumbers = [];
for( let i = 0; i <= numbers.length; i ++){
    if(numbers[i] > value){
        newNumbers.push(numbers[i])
    }
}
return newNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76];
*/

////////-----hm-4----//////////
/*
function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  const values = Object.values(products);
 for (const value of values) {
  sum += value;
 }
  return sum <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
*/
/*
function calcAverageCalories(days) {
if(days.length === 0){
  return 0;
}
let totalCalories = 0;
for(const cal of days){
totalCalories += cal.calories;
}
return totalCalories / days.length
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
*/
/*
const profile = {
  username: "Jacob",
playTime: 300,

changeUsername(newName){
  this.username = newName
},
updatePlayTime(hours){
  this.playTime += hours
},
getInfo(){
  return `${this.username} has ${this.playTime} active hours!`
}
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!
'

const getUserNames = (users) => {
  return users.map(user => user.name)
}
console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


const getUsersWithFriend = (users, friendName) =>{
  return users.filter( user => user.friends.includes(friendName))
}
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // [];
*/
/*
const sortByDescendingFriendCount = (users) =>{
  return users.toSorted((a, b) => b.friends.length - a.friends.length)
}
console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
*/
/*
const getTotalBalanceByGender = (users, gender) => {
  return users
.filter(client => client.gender === gender)
.reduce((totalBalance, client) => totalBalance + client.balance, 0)
}

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
*/


//////////-------hm6-----////////
/*
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
*/
/*
class Storage{
  #items = [];
  constructor(items){
    this.#items = items;
  }
  getItems(){
    return this.#items;
  }
  addItem(newItem){
    this.#items.push(newItem)
  }
  removeItem(itemToRemove){
    this.#items = this.#items.filter(item => item !== itemToRemove)
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


class StringBuilder{
  #value;
  constructor(value){
this.#value = value;
  }
  getValue(){
    return this.#value;
  }
  padEnd(str){
    this.#value = `${this.#value}${str}`
  }
  padStart(str){
    this.#value = `${str}${this.#value}`
  }
  padBoth(str){
    this.#value = `${str}${this.#value}${str}`
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/

