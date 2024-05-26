
// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1
/*
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
//styles[1] = 'Класика';
const index = styles.indexOf('Блюз');
if (index !== -1) {
    styles[index] = 'Класика';
}
function logItems(array) {
    for (let i = 0; i < array.length; i+=1) {
        console.log(`${i + 1}-${array[i]}`);
    }  
}
logItems(styles);



// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"
/*
const login = ["Peter", "John", "Igor", "Sasha"];
function checkLogIn(logins) {
    const login = prompt("Enter login");
    /*
    for (const name of logins) {
        if (name === login) {
            return "Доступ дозволено";
        }
    }
    return "Користувач не знайден";
    return logins.includes(login) ? "Доступ дозволено" :  "Користувач не знайден";
}
console.log(checkLogIn(logins));
*/



// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
/*
 const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
 function sum(someArr){
    const newArray = [];
    for (let i = 0; i < someArr.length -1; i += 1){
    const current = someArr[i];
    const next = someArr [i + 1];
    newArray.push(current + next);
    }
    return newArray;
 }
 console.log((someArr));
 */

 //Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of
/*
const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;

const userKeys = Object.keys(user);
for(const key of userKeys){
console.log(`${key}:${user[key]}`)
}
*/



//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
/*
 const  calculator = {
    read(a,b){
        if(typeof a !== "number" || typeof b !== "number"){
        console.log("error")
        }else{
        this.valueA = a;
        this.valueB = b;
        }
    },
    sum(){
if( !this.valueA || !this.valueB){
    return "Values not found"
}
return  this.valueA + this.valueB
},
mult(){
    if( !this.valueA || !this.valueB){
        return "Values not found"
    }
    return this.valueA * this.valueB
}
}
calculator.read("10", "15");
console.log(calculator.sum());
console.log(calculator.mult());
*/
/*
Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів. 
Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
 У консоль будуть виведені результати її викликів.
const getUserNames = (users) => {
    return users.map(user => user.name);
};

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
   */


  /* Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
перший параметр users — масив об’єктів користувачів
другий параметр friendName — ім’я друга для пошуку.
Функція має повертати масив усіх користувачів із масиву users, 
у яких є друг з іменем friendName. Друзі кожного користувача зберігаються у властивості friends. 
Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.

Поради:
Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
Використовуй метод includes() для перевірки, чи масив friends містить friendName.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
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
  
  console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
  */
 /*
 
Напиши стрілочну функцію sortByDescendingFriendCount(users) , 
яка прийматиме один параметр users — масив об’єктів користувачів.
Функція має повертати масив усіх користувачів, 
відсортованих за спаданням кількостій їх друзів (властивість friends).
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. 
У консоль будуть виведені результати її роботи.
const sortByDescendingFriendCount = (users) => {
    return users.toSorted((a,b) => b.friends.length - a.friends.length)
};
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
  // [
  //   {
  //     name: "Ross Vazquez",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     friends: ["Briana Decker", "Sharron Pace"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Elma Head",
  //     friends: ["Goldie Gentry", "Aisha Tran"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Carey Barr",
  //     friends: ["Jordan Sampson", "Eddie Strong"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"],
  //     gender: "male"
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     friends: ["Goldie Gentry", "Briana Decker"],
  //     gender: "female"
  //   },
  //   {
  //     name: "Moore Hensley",
  //     friends: ["Sharron Pace"],
  //     gender: "male"
  //   }
  // ]
  */
 /*
 Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
перший параметр users — масив об’єктів користувачів,
другий параметр gender — рядок, що зберігає стать.
Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), 
стать яких (властивість gender) збігається зі значенням параметра gender.

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
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

