//setting up the weather api practice
document.addEventListener("click", function(event) {
    //checking if button was clicked
    if(!event.target.matches("#button")) return;
    console.log("Button was clicked");
    // fetch("<https://api.weather.gov/points/36.1,79.44>")
    // .then((response)=>(response.json())
    // .then((data)=>console.log(data));

    fetch("<https://api.weather.gov/points/36.1,79.44>")
    .then((response) => response.json())
    .then((data) => console.log(data));
});