

/////-------------- Модуль 2 -------------////
/*
 const bmi = calcBMI("88,3", "1,69");
 console.log(bmi);


 const hours = 14;
 const minutes = 26;
 let timeString = minutes > 0 ? `${hours} h. ${minutes} m.`: `${hours} h.`
  if (minutes > 0){
  console.log(`${hours} h. ${minutes} m.`)
 }else{
  console.log(`${hours} h.`)
 }
console.log( timeString)
 


const dayUntilDeadLine = 0;

if ( dayUntilDeadLine === 0){
  console.log("Today")
} else if ( dayUntilDeadLine === 1){
  console.log("Tomorrow")
} else if (dayUntilDeadLine === 2){
  console.log("Overtime")
} else{
  console.log("Date in the future")
}
console.log(dayUntilDeadLine)
*/

//const sub = "free";
//const canAccess = sub === 'pro' || sub === "vip"
//console.log(canAccess)
/*
const isOnline = true;
const isFriend = true;
const isDnd = true;


const canOpenChat = isOnline && isFriend && !isDnd;
console.log (" Можна відкрити чат?" ,  canOpenChat);

const a = 100;
const b = 20;

for ( let i = b; i <= a; i += 1){
  if ( i % 5 === 0)
  console.log(i)
}
*/

/*
const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const sortedScores = students.toSorted((a, b) => a.score - b.score)
const names = sortedScores.map(student => student.name)
console.log(names)
const customer = {
	username: "Jacob"
};
*/
/*
const image = document.querySelector(".image")
console.log(image.hasAttribute("src"))
console.log(image.getAttribute("alt"))
image.setAttribute("alt", "Amszing nature")
console.log(image.getAttribute("alt"))
image.removeAttribute("alt")
console.log(image.getAttribute("alt"))



const link = document.querySelector(".link")
link.classList.add("special")
link.classList.remove("is-active")
link.classList.remove("special")
link.classList.toggle("is-active")
link.classList.replace("is-active", "is-anActive")
console.log(link.classList)
const hasActiveClass = link.classList.contains("is-active"); // true


const btnOpen = document.querySelector(".btn")
btnOpen.style.backgroundColor = 'blue'


const saveBtn = document.querySelector('button[data-action="save"]')
console.log(saveBtn.dataset.action)
saveBtn.dataset.action = "update"
saveBtn.dataset.role = "admin"
console.log(saveBtn.dataset.action)
console.log(saveBtn.dataset.role)


const heading = document.createElement("h1")
heading.classList.add("title")
heading.textContent = "This is a title of titles"
console.log(heading)

const image2 = document.createElement("img")
image2.src = "<https://picsum.photos/id/11/320/240>";
image2.alt = "Nature";
console.log(image2)
*/
/*
const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);

const form = document.querySelector("form")


form.addEventListener("submit", event =>{
event.preventDefault()
}
)


const userName = document.querySelector(".js-user-name")

userName.addEventListener("input", hendleInput)

function handleInput(event){
  console.log(event.currentTarget.value)
}
  */