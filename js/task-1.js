 /*const answer = prompt("Яка офіційна назва JavaScript");
console.log(answer);
if (answer === "ECMAScript") {
    alert ("Вірно");
    
} else {
    alert("ECMAScript");
    
}
*/
/*
const answer = prompt("Enter number"); 
let hours = parseInt(answer/ 60);
let minutes = answer % 60;
hours = String(hours).padStart(2,"0");
minutes = String(minutes).padStart(2, "0");
console.log(`${hours}:${minutes}`);
*/


/*const max = 100;
const min = 10;
let total = 0;
for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
    total += i;
    }
}
console.log(total);
*/

/*function numbers (max, min) {
    let total = 0;
    for (let i = max; i >= min; i--) {
        console.log(i);
        if (i % 2 === 0) {
        total += i;
        }
    } 
    return total;
}
console.log (numbers(100, 10));
*/

/*
const num = Number(prompt("Введіть число від 1 до 4"));
let result ="";
switch (num) {
    case 1:
        result = "зима";
        break;
        case 2:
        result = "весна";
        break;
        case 3:
        result = "літо";
        break;
        case 4:
        result = "осінь";
        break;

    default:
        result = "Введіть число від 1 до 4"
        break;
}
console.log(result);
*/
/*
const num = Number(prompt("Введіть число від 1 до 4"));
function season(num) {
    switch (num) {
            case 1:
            return "зима";
            case 2:
            return "весна";
            case 3:
            return "літо";
            case 4:
            return "осінь";
    
        default:
            return "Введіть число від 1 до 4"
    }
}
console.log(season(num));
*/
/*
const login = prompt("enter login");
console.log (login);
if (login === "Адмін") {
    const password = prompt("Введіть пароль");
   // if(password === "Я головний"){
     //   alert (" Вітаю");
    //} else {
     //   alert ("Невірний пароль");
   // }
    alert (password === "Я головний" ? " Вітаю" : "Невірний пароль");
} else if (login === "" || login === null){
    alert("Скасовано");
} else {
    alert("Я вас не знаю");
}
*/

/*
const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
if (minuteValue <= 15) {
    console.log(`${minuteValue} - перша чверть`);
} else if(minuteValue > 15 && minuteValue <= 30) {
    console.log(`${minuteValue} - друга чверть`);
}else if (minuteValue > 30 && minuteValue <= 45){
    console.log(`${minuteValue} - третя чверть`);
} else {
    console.log(`${minuteValue} - четверта чверть`);
}
*/


/*
function checkNumber(num) {
    if (typeof num !== "number"){
 return "NaN";
    }
    if (num % 3 === 0 && num % 5 === 0 ) {
        return "fizzbuzz";
       }
    if (num % 3 === 0) {
        return "fizz";
    }
   if (num % 5 === 0) {
    return "buzz";
   } 
   return " what are you doing";
}
console.log(checkNumber("kate"));
*/
/*
const string = "Hello";
let reverse = "";
for (let i = string.length - 1; i >= 0; i -= 1) { 
    reverse += string[i];
} 
console.log(reverse.toLocaleLowerCase());
*/
/*
const subscribers = [
{name:  'user1', age: 20, profession: 'student'},
{name:  'user12', age: 25, profession: 'programmer'}
];
const haveYouJustGotNewSubscribers = true;
if (haveYouJustGotNewSubscribers) {
    subscribers.unshift ({name: 'users3' , age: 18, profession: 'teacher'})
}
console.log(subscribers);
*/

/*
Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так,
 щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. 
Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

function calculateTotal(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    } 
    return total;
}
console.log(calculateTotal(2));
*/

/*
Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

Функція оголошує два параметри:

products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну
 кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.
function isEnoughCapacity(products, containerSize) {
    let sum = 0;
    const values = Object.values(products)
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
 
  
  
 