// const grid = document.querySelector(".grid");
// const btn = document.getElementById("create");

// btn.addEventListener("click", function(e){
//     const div = document.createElement("div");
//     div.classList.add("tiles");
//     console.log("hello")
//     grid.appendChild(div);
// });



//fetching the range slider
var slider = document.getElementById("range-slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
//updating the value as user interacts with it
slider.oninput = function() {
  output.innerHTML = this.value;
}

const btn = document.getElementById("create");
const grid = document.querySelector(".grid");


function makeGrid(count){


    // let width = Math.ceil(960 % count);
    grid.style.setProperty('--grid-rows', count);    
    grid.style.setProperty('--grid-cols', count);
    for(let i = 0; i < count*count; i++){
        const div = document.createElement("div");
        div.classList.add("grid-items");
        // div.textContent = i; 
        grid.appendChild(div);
    }

// grid.style.cssText = ` grid-template-colums: repeat(${count}, ${num}px);`
// grid.style.cssText = ` grid-template-rows: repeat(${count}, ${width}fr);`
}

function getRangeVal(){
    // console.log(slider.value);
    return slider.value;
}

// const container = document.querySelector(".grid");

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };



btn.addEventListener("click", makeGrid(getRangeVal()));
