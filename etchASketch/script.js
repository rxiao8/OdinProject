const grid = document.querySelector(".grid");
const btn = document.getElementById("create");

btn.addEventListener("click", function(e){
    const div = document.createElement("div");
    div.classList.add("tiles");
    console.log("hello")
    grid.appendChild(div);
});