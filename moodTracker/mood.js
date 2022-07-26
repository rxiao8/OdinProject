
const moodArr = ["amazing", "decent", "lazy", "stressed", "sad", "upset"];
const moodBtn = document.querySelector(".moodBtn");
const mood = document.querySelector(".mood-range");
const colorArr = document.getElementsByClassName("tile");
window.addEventListener("load", function(e){

    // mood.textContent = "world0";
    mood.style.setProperty("--grid-rows", 6);
    for (var i = 0; i < 6; i++) {
            const div = document.createElement("div");
            div.classList.add("tile");
            div.style.boxSizing = "border-box";
            div.style.backgroundColor = " #8d6346";
            div.style.padding = "10px";
            div.textContent = moodArr[i];
            // div.textContent = i;
            mood.appendChild(div);
          }

    getColor();
})

function getColor(){
  //grab the color of the tile
  
 var color = colorArr[0].style.backgroundColor; 
    color = color.replace(/[^\d,]/g, '').split(',');    
  //splices the rgb value into arr
  for(var i = 0; i < colorArr.length; i++){
    var newColor = color;
     for(var j = 0; j< color.length; j++){
      //increment each value in the rgb
      newColor[j] = +color[j] + 24;
     }
     newColor = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
     //set the div color as gradient
     colorArr[i].style.backgroundColor = newColor;
     colorArr[i].style.border = `solid 2px ${newColor}`;
  }
  
}


mood.addEventListener("click", function(event){
  if (event.target.tagName === 'DIV') {
    const arr = Array.prototype.slice.call(colorArr);
    arr.forEach(function(item){
      console.log(item.classList.contains("selected"));
      if(item.classList.contains("selected")){
        item.classList.remove("selected");
      }
      });
    event.target.classList.toggle('selected');


  // console.log("here");}
}
}, false);


//turning hex to rgb. Starting with the 0x and using '+' to concat the values
function hexToRGB(h) {
  let r = 0, g = 0, b = 0;
  
  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + (h[2] + 5);
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ")";
}
