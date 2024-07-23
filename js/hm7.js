///////////---------hm7----/////////////
/*
////Task1////
const totalCategories = document.querySelectorAll(".item")
console.log(`Number of categories ${totalCategories.length}`)

const categoryTitles = document.querySelectorAll("h2")
const categoryElements = document.querySelectorAll(".item ul")


const getInfo = () => {
  categoryTitles.forEach((title, index) => {
    console.log(`Category: ${title.textContent}`);
  const numOfElements = categoryElements[index].querySelectorAll("li").length;
    console.log(`Number of elements: ${numOfElements}`);
  });
}

getInfo();
*/

/*
////Task2/////
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const list = document.querySelector(".gallery");
const listItem = images
.map((img) => `<li class="list-item"><img src="${img.url}" alt="${img.alt}" class="img"</li>`)
.join("");
list.insertAdjacentHTML("beforeend", listItem)
*/

///Task3///
/*
const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) =>{
  if( event.target.value.trim() === ""){
    textOutput.textContent = "Anonymous"
  }else{
    textOutput.textContent = event.target.value.trim()
  }
}
);
*/
/////Task4////
/*
const loginForm = document.querySelector(".login-form");
const errorMessage = document.createElement("p")

errorMessage.classList.add("error-massage");
errorMessage.textContent = "All form fields must be filled in";
errorMessage.style.display = "none";

loginForm.appendChild(errorMessage)
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
event.preventDefault();

const form = event.target;
const email = form.elements.email.value.trim();
const password = form.elements.password.value.trim();

if( email === "" || password === ""){
  errorMessage.style.display = "block"
  return;
}
const userData = {
  Email: email,
  Password: password,
}

console.log(userData);
form.reset();
errorMessage.style.display = "none"

}
