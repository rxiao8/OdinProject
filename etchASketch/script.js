//fetching the range slider
var slider = document.getElementById("range-slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
//updating the value as user interacts with it
slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
};

window.addEventListener("load", () => {
  output.innerHTML = "16 x 16";
});

//retreiving all the color btns
const btn = document.getElementById("create");
const btnBlack = document.getElementById("black");
const btnWarm = document.getElementById("red");
const btnCool = document.getElementById("blue");
const btnErasor = document.getElementById("erasor");
const btnClear = document.getElementById("clear");

//creates the grid
function makeGrid() {
  const container = document.querySelector(".grid-container");

  var count = slider.value;
  // if(container.hasChildNodes()){
  //   container.removeChild(container.children[0]);
  // }
  const grid = document.querySelector(".grid");

  if (grid.hasChildNodes()) {
    while (grid.firstChild) {
      grid.firstChild.remove();
    }
  }

  grid.style.setProperty("--grid-rows", count);
  grid.style.setProperty("--grid-cols", count);
  for (let i = 0; i < count * count; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-items");
    // div.textContent = i;
    // div.style.opacity = .1;
    div.style.backgroundClip = "padding-box";
    grid.appendChild(div);
  }
  // console.log(grid.children.length);
  // console.log(count);
  container.appendChild(grid);
}

//go over here
btn.addEventListener("click", makeGrid);
// makeGrid(slider.value);

/*[document.querySelector('.a-class'), document.querySelector('.another-class')].forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})*/


function buttonActivation(button, action, type, color){
  const tiles = document.querySelectorAll(".grid-items");
  var temp = window.getComputedStyle(item).getPropertyValue("opacity");
//   if(type === "canvas"){
// }
button.addEventListener(action, function (e) {
  // const tiles = document.querySelectorAll(".grid-items");
  // console.log("cool");
  tiles.forEach(function (item) {
    //  item.style.setProperty("--tile-color-hover", "blue");
    item.addEventListener("mouseover", function () {
      // var temp = window.getComputedStyle(item).getPropertyValue("opacity");
      temp = +temp + 0.1; //since temp was a string
      // temp =parseFloat(temp) + 0.1; //another way to parse
      item.style.opacity = temp;
      item.style.backgroundColor = color;
    });
  });
});
}

// buttonActivation(btnCool, click, click, blue);
// buttonActivation(btnCool, click, click, red);
// buttonActivation(btnBlack, click, click, black);
// buttonActivation(btnCool, click, click, blue);


//to activate black pen color when window loads
window.addEventListener("load", (event) => {
  makeGrid(slider.value);
  const tiles = document.querySelectorAll(".grid-items");
  // console.log("Page Loaded");
  tiles.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      var temp = window.getComputedStyle(item).getPropertyValue("opacity");
      temp = +temp + 0.1; //since temp was a string
      // temp =parseFloat(temp) + 0.1; //another way to parse
      item.style.opacity = temp;
      item.style.backgroundColor = "black";
      // console.log(window.getComputedStyle(item).getPropertyValue("opacity"));
    });
  });
});

btn.addEventListener("click", (event) => {
  const tiles = document.querySelectorAll(".grid-items");
  // console.log("Page Loaded");
  tiles.forEach(function (item) {
    // item.style.setProperty("--tile-color-hover", "red");
    item.addEventListener("mouseover", function () {
      var temp = window.getComputedStyle(item).getPropertyValue("opacity");
      temp = +temp + 0.1; //since temp was a string
      // temp =parseFloat(temp) + 0.1; //another way to parse
      item.style.opacity = temp;
      item.style.backgroundColor = "black";
    });
  });
});

//changes pen color to black
btnBlack.addEventListener("click", function (e) {
  const tiles = document.querySelectorAll(".grid-items");
  console.log("black");
  tiles.forEach(function (item) {
    // item.style.setProperty("--tile-color-hover", "red");
    item.addEventListener("mouseover", function () {
      var temp = window.getComputedStyle(item).getPropertyValue("opacity");
      temp = +temp + 0.1; //since temp was a string
      // temp =parseFloat(temp) + 0.1; //another way to parse
      item.style.opacity = temp;
      item.style.backgroundColor = "black";
    });
  });
});

//changes pen color to red
btnWarm.addEventListener("click", function (e) {
  const tiles = document.querySelectorAll(".grid-items");
  console.log("red");
  tiles.forEach(function (item) {
    // item.style.setProperty("--tile-color-hover", "red");
    item.addEventListener("mouseover", function () {
      var temp = window.getComputedStyle(item).getPropertyValue("opacity");
      temp = +temp + 0.1; //since temp was a string
      // temp =parseFloat(temp) + 0.1; //another way to parse
      item.style.opacity = temp;
      item.style.backgroundColor = "red";
    });
  });
});

//changes pen color to blue
btnCool.addEventListener("click", function (e) {
  const tiles = document.querySelectorAll(".grid-items");
  console.log("cool");
  tiles.forEach(function (item) {
    //  item.style.setProperty("--tile-color-hover", "blue");
    item.addEventListener("mouseover", function () {
      var temp = window.getComputedStyle(item).getPropertyValue("opacity");
      temp = +temp + 0.1; //since temp was a string
      // temp =parseFloat(temp) + 0.1; //another way to parse
      item.style.opacity = temp;
      item.style.backgroundColor = "blue";
    });
  });
});

//changes pen color to white
btnErasor.addEventListener("click", function (e) {
  const tiles = document.querySelectorAll(".grid-items");
  tiles.forEach(function (item) {
    //  item.style.setProperty("--tile-color-hover", "white");
    item.addEventListener("mouseover", function () {
      var temp = window.getComputedStyle(item).getPropertyValue("opacity");
      item.style.opacity = 0.1;
      item.style.backgroundColor = "white";
    });
  });
});

//to activate black pen color when window loads
btnClear.addEventListener("click", (event) => {
  const tiles = document.querySelectorAll(".grid-items");
  tiles.forEach(function (item) {
    var temp = window.getComputedStyle(item).getPropertyValue("opacity");
    //since temp was a string
    // temp =parseFloat(temp) + 0.1; //another way to parse
    item.style.opacity = 0.1;
    // item.style.setProperty("--tile-color-hover", "red");
    item.style.backgroundColor = "white";
  });
});

// //colors whole canvas
// document.getElementById("background").addEventListener("click", ()=>{
//   const tiles = document.querySelectorAll(".grid-items");
//   tiles.forEach(function (item) {
//     item.style.backgroundColor= "lightblue";
//   });
// })

//allows users to pick from color wheel
const rgbWheel = document.getElementById("RGB-wheel");
rgbWheel.addEventListener("click", (event) => {
  const colorVal = document.querySelector("#color-wheel-tiles").value;
  const tiles = document.querySelectorAll(".grid-items");
  tiles.forEach(function (item) {
    //  item.style.setProperty("--tile-color-hover", "white");
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = colorVal;
      // console.log(colorVal);
    });
  });
});

const btnBack = document.getElementById("background");
btnBack.addEventListener("click", (event) => {
  const colorVal = document.querySelector("#color-wheel-background").value;
  const tiles = document.querySelectorAll(".grid-items");
  tiles.forEach(function (item) {
    //  item.style.setProperty("--tile-color-hover", "white");

    item.style.backgroundColor = colorVal;
  });
});
