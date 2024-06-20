// // Створити список
// // Створити кнопки Add, Remove, які будуть змінювати склад списку
// // Створити input, з якого отримаємо значення, що буде передано в li
// // Парним лі вказати жовтий фон, непарним синій
// // Використовуй createElement
/*
const list = document.createElement('ol');
const buttonAdd = document.createElement('button');
const buttonRemove = document.createElement('button');
const input = document.createElement('input');

buttonAdd.textContent = 'Add';
buttonRemove.textContent = 'Remove';

document.body.append(input, buttonAdd, buttonRemove, list);
buttonAdd.addEventListener("click", addItem);
buttonRemove.addEventListener("click", removeItem)

function addItem(){
    const value = input.value.trim();
    if(value === ""){
        iziToast.warning({
            title: 'Caution',
            message: 'You forgot important data',
            overlayColor: 'rgba(0, 0, 0, 1)'
        });
        return;
    }
    const itemList = document.createElement("li");
    itemList.textContent = value;
    input.value = "";

    list.appendChild(itemList);


    if(list.children.length % 2 === 0){
itemList.style.background = "pink";
    } else{
        itemList.style.background = "orange";
    }
}

function removeItem(){
    if(list.lastChild){
        list.lastChild.remove();
    }
}
*/


// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування
/*
 const forms = [
   "width: 100px; height: 100px; border-width: 1px;",   "width: 100px; height: 100px; border-radius: 50%;",
   "width: 150px; height: 100px; border-width: 1px;",
   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
   "width: 150px; height: 100px; transform: skew(20deg)",
 ];
 function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
 function randomither(max) {   return Math.floor(Math.random() * max);
 }

 const box = document.createElement("div");

clickBox();
 document.body.append(box);

box.addEventListener("click", clickBox);

function clickBox(){
    box.style.cssText = forms[randomither(forms.length)];
    box.style.background = getRandomHexColor();
    box.style.position = "absolute";
    box.style.top = `${randomither(95)}%`;
    box.style.left = `${randomither(95)}%`;
}
*/

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
const items = document.querySelectorAll(".listItem");
const button = document.querySelector("#double");

button.addEventListener("click", double);

function double(){
items.forEach((item) => (item.textContent *= 2))
};


// Завдання 7
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const table = document.getElementById("productTable");
const message = document.getElementById("productDetails");

table.addEventListener("click", showText);
function showText(event){
if(event.target.nodeName !== "TD"){
    return;
}
const parent = event.target.parentNode;
const product = parent.firstElementChild.textContent;
const price = parent.lastElementChild.textContent;
message.insertAdjacentHTML('afterbegin',`<p> Ви вибрали ${product} за ${price} </p>`) ;
//message.textContent = ` Ви вибрали ${product} за ${price} `;
//message.innerHTML = `<p> Ви вибрали ${product} за ${price} </p>`;
}
*/
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
const items = document.querySelector(".statList");
const btnResult = document.getElementById("resultButton");
const resultMessage = document.getElementById("resultSection");
let result = 0;
let clickStatistics = {};

items.addEventListener("click", oneBtnClick);
function oneBtnClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    const value = Number(event.target.dataset.number);
    result += value;

    const buttonKey = event.target.id || event.target.textContent;
    
    if (clickStatistics[buttonKey]) {
        clickStatistics[buttonKey]++;
    } else {
        clickStatistics[buttonKey] = 1;
    }
    
    console.log(result);
    console.log(clickStatistics); 

btnResult.addEventListener("click", showResult);
function showResult() {
    resultMessage.textContent = `загальна кількість ${result} `;
    result = 0;
}
}
*/
