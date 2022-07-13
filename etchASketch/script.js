//fetching the range slider
var slider = document.getElementById("range-slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
//updating the value as user interacts with it
slider.oninput = function () {
  output.innerHTML = this.value;
};

//retreiving all the color btns
const btn = document.getElementById("create");
const btnWarm = document.getElementById("warm-RGB");
const btnCool = document.getElementById("cool-RGB");
const btnErasor = document.getElementById("erasor");

//creates the grid
function makeGrid() {
  
  const container = document.querySelector(".grid-container");

  var count = slider.value;
  // if(container.hasChildNodes()){
  //   container.removeChild(container.children[0]);
  // }  
  const grid = document.querySelector(".grid");

  if(grid.hasChildNodes()){
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
    grid.appendChild(div);
  }
  console.log(grid.children.length);
  console.log(count);
  container.appendChild(grid);

}

//go over here
// btn.addEventListener("click", makeGrid);
// makeGrid(slider.value);

const tiles = document.querySelectorAll(".grid-items");

//to activate black pen color when window loads
window.addEventListener("load", (event) => {
  // console.log("Page Loaded");
  tiles.forEach(function (item) {
    // item.style.setProperty("--tile-color-hover", "red");
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "black";
    });
  });
});

//changes pen color to red
btnWarm.addEventListener("click", function (e) {
  console.log("red");
  tiles.forEach(function (item) {
    // item.style.setProperty("--tile-color-hover", "red");
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "red";
    });
  });
});

//changes pen color to blue
btnCool.addEventListener("click", function (e) {
  console.log("cool");
  tiles.forEach(function (item) {
    //  item.style.setProperty("--tile-color-hover", "blue");
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "blue";
    });
  });
});

//changes pen color to white
btnErasor.addEventListener("click", function (e) {
  tiles.forEach(function (item) {
    //  item.style.setProperty("--tile-color-hover", "white");
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = "white";
    });
  });
});

