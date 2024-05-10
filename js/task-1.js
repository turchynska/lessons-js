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