// const item = document.querySelector('ul')
// console.log(item)

// const item = document.querySelector('.item-js')
// console.log(item);
/*
const cats = [
      "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
      "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
      "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
      "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
      "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
      "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
       "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
       "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
       "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
       "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
       "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
       "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
     ];

     const list = document.querySelector(".item-js");
     const markup = cats
     .map((src) => `
     <li>
    <img src="${src}" alt="cat" width="300px" loading="lazy">
    <p>lorem10</p>
    </li>
     `)
     .join("");


     list.insertAdjacentHTML('afterbegin', markup)

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },

  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
     */
// Task 1
// Отримати масив імен усіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// *зробити функцію універсальною, щоб вона повертала
// масив будь-якої заданої властивості

//function getUserWithGender(users, gender) {
  //return users.filter(user => user.gender === gender).map(user => user.name)
  //return users.reduce((userNames, user) => user.gender === gender ? [...userNames, user.name]: userNames, [])
//}
//console.log(getUserWithGender(users, 'male'))

// Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
/*
function getSortedSkills(users) {
  return users.flatMap(user => user.skills).filter((skill, index, array) =>
   //console.log (array.indexOf(skill), index),
    array.indexOf(skill) === index ).toSorted((a, b) => a.localeCompare(b))
}
console.log(getSortedSkills(users));



//Створити статистику - об'єкт, у якому вказується кількість тегів
 const tweets = [
   { id: "000", likes: 5, tags: ["js", "nodejs"] },
   { id: "001", likes: 2, tags: ["html", "css"] },
   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
   { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }, ];

  const allTweets = tweets.flatMap(tweet => tweet.tags);
  const statistic = {};
 allTweets.forEach(tag => {
  if (!statistic[tag]){
    statistic[tag] = 1 
  }
   else {
    statistic[tag] += 1
  }
  console.log(statistic[tag])
  console.log(statistic);
 });



//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

class Client{
#login;
#email;
constructor (login, email){
  this.#login = login,
  this.#email = email
}
get getClientData(){
return {clientLogin: this.#login, clientEmail: this.#email}
}
set changeEmail(newEmail){
this.#email = newEmail;
}
}
const client = new Client("gym.bag", "everything")
console.log(client.changeEmail = "hhdduw")
*/

//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priority,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority),
/*
class Notes {
 static Priority = {HIGHT: "hight", MIDDLE: "middle", LOW: "low"};
 constructor(){
  this.items = [];
}
  addNote(note){
    this.items.push(note);
  }
  removeNote(noteText){
this.items = this.items.filter(item => item.text !== noteText)
  }
  updatePriority(noteText, newPriority){
  const result =  this.items.find(item => item.text === noteText);
  if(result){
    result.priority(newPriority);
  }
  }
}
const notes = new Notes();
notes.addNote({text: "apple", priority: Notes.Priority.LOW})
notes.addNote({text: "cherry", priority: Notes.Priority.MIDDLE})
notes.addNote({text: "orange", priority: Notes.Priority.HIGHT})
notes.removeNote("cherry");
notes.updatePriority("mango", Notes.Priority.LOW)
console.log(notes)


// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас WorkerPosition, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

class Worker{
constructor(name, age, salary){
  this.name = name;
  this.age = age;
  this.salary = salary
}
getSalary (){
  return `Worker ${this.name} has salary ${this.salary} dollars`
}
}

class WorkerPosition extends Worker {
  constructor(name, age, salary, position) {
      super(name, age, salary);
      this.position = position;
  }

getPosition(){
  return `${this.name} works as ${this.position}`
}
}
const worker = new Worker("Kate", 24, 5000);
console.log(worker.getSalary());

const workerPosition = new WorkerPosition("Alice", 28, 6000, "Engineer");
console.log(workerPosition.getSalary());
console.log(workerPosition.getPosition());

// Task 10

// Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)
 const products = [
   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 }
 ];
 function getMostExpensiveMeatProduct(products) {
  const meatProducts = products.filter(product => product.category === 'meat');
  
  const mostExpensiveMeatProduct = meatProducts.reduce((max, product) => {
      return product.price > max.price ? product : max;
  }, meatProducts[0]);

  return mostExpensiveMeatProduct;
}
console.log(getMostExpensiveMeatProduct(products));
*/