// // const moodBtn = this.document.getElementByClassName("moodBtn");

// const moodBtn = document.querySelector(".moodBtn");
// const moodContainer = document.querySelector(".mood-container");
// function createTiles() {
//   console.log("here");
//   const mood = document.querySelector("mood-range");
//   for (var i = 0; i < 7; i++) {
//     const div = document.createElement("div");
//     div.classList.add("tile");
//     // div.style.backgroundClip = "padding-box";
//     div.textContent = i;
//     mood.appendChild(div);
//   }

//   // moodContainer.appendChild(mood);
// }

// moodBtn.addEventListener("click", createTiles);


const moodBtn = document.querySelector(".moodBtn");
moodBtn.addEventListener("click", function(e){
    console.log("here");
    const mood = document.querySelector(".mood-range");
    // mood.textContent = "world0";
    mood.style.setProperty("--grid-cols", 6);
    for (var i = 0; i < 7; i++) {
            const div = document.createElement("div");
        //     div.classList.add("tile");
            div.style.backgroundClip = "border-box";
            div.style.padding = "10px";
            // div.textContent = i;
            mood.appendChild(div);
          }
})