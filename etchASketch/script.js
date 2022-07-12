//fetching the range slider
var slider = document.getElementById("range-slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
//updating the value as user interacts with it
slider.oninput = function() {
  output.innerHTML = this.value;
}



const btn = document.getElementById("create");
const btnWarm = document.getElementById("warm-RGB");
const btnCool = document.getElementById("cool-RGB");


function makeGrid(count){

const grid = document.querySelector(".grid");

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



btn.addEventListener("click", makeGrid(slider.value));
btnWarm.addEventListener("click", function(e){
    
});
