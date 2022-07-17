function renderWeather(data){
    const link = data.properties.properties.city;
    console.log(link);
    document.write(link);
}
//setting up the weather api practice
const weatherBtn = document.getElementById("btn");
weatherBtn.addEventListener("click", function (event) {
  //checking if button was clicked
  console.log("here");
//   if (!event.target.matches("#button")) return;
//   console.log("Button was clicked");

  fetch("https://api.weather.gov/points/36.095692,-79.437799")
  .then((response) => response.json())
  .then((data)=> console.log(data).context);
//   .then((data) => console.log(data));
// .then((data)=>renderWeather(data));


});
