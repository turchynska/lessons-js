/*
function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  ть
  const user = {
    name: "Alice"
  };
  
  const greet = sayHello.bind(user);
  
  greet("Hello");
  console.log(sayHello(greeting))\
 
  */

/*
const people = [
  {
    name: "Ross",
    sex: "male",
  },
  {
    name: "Phoebe",
    sex: "female",
  },
  {
    name: "Chandler",
    sex: "male",
  },
  {
    name: "Monica",
    sex: "female",
  },
  {
    name: "Joe",
    sex: "male",
  },
  {
    name: "Rachel",
    sex: "female",
  },
];

 function addNiceAdjective(arr) {
  for (let i = 0; i < arr.length; i++) {
   if (arr[i].sex === 'male') {
    arr[i].name +=  ' handsome';
   } else {
    arr[i].name += ' beautiful'
   }
  }
  return arr;
 }
 console.log(addNiceAdjective(people));
 */
/*
 function addNiceAdjective(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arr[i].name += arr[i].sex === 'male' ? ' handsome' : ' beautiful';
  }
  return arr;
 }
 console.log(addNiceAdjective(people));
const happyButton = document.getElementById("btn-happines");
const sadButton = document.getElementById("btn-sadness");
const image = document.querySelector(".img");
happyButton.addEventListener("click", function () {
  image.style.display = "inline";
  happyButton.disabled = true;
  sadButton.disabled = false;
});

sadButton.addEventListener("click", function () {
  image.style.display = "none";
  happyButton.disabled = false;
  sadButton.disabled = true;
});
/*

function toggleImage(displayStyle, disableHappy, disableSad) {
  image.style.display = displayStyle;
  happyButton.disabled = disableHappy;
  sadButton.disabled = disableSad;
}

happyButton.addEventListener("click", function () {
  toggleImage("inline", true, false);
});

sadButton.addEventListener("click", function () {
  toggleImage("none", false, true);
});
*/
