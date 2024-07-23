

///////////////-----go-it----hm1//////
/*
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
  
  console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
  console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
  console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
  */
  /*
  function getShippingMessage (country, price, deliveryFee){
      const totalPrice = price + deliveryFee;
      return `Shipping to ${country} will cost ${totalPrice} credits`;
  }
  
  console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
  console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
  */
  /*
  function getElementWidth (content, padding, border){
  const result = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
  return result;
  }
  
  console.log(getElementWidth("50px", "8px", "4px")); // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px")); // 200
  
   function calcBMI(weight, height){
    weight = weight.replace(",", ".");
    height = height.replace(",", ".");
  
    weight = Number(weight);
    height = Number(height);
  
    const result = weight / ( height * height);
  
  
  return Number(result.toFixed(1))
   }

/////////////-----go-it---- hm2///////
/*
function makeTransaction(quantity, pricePerDroid, customerCredits){
    let total = quantity * pricePerDroid;
    if( total > customerCredits){
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

