// function renderWeather(data){
//     const link = data.properties.properties.city;
//     console.log(link);
//     document.write(link);
// }
// //setting up the weather api practice
// const weatherBtn = document.getElementById("btn");
// weatherBtn.addEventListener("click", function (event) {
//   //checking if button was clicked
//   console.log("here");
// //   if (!event.target.matches("#button")) return;
// //   console.log("Button was clicked");

//   fetch("https://api.weather.gov/points/36.095692,-79.437799")
//   .then((response) => response.json())
//   .then((data)=> console.log(data).context);
// //   .then((data) => console.log(data));
// // .then((data)=>renderWeather(data));

// });

const weatherBtn = document.getElementById("btn");
weatherBtn.addEventListener("click", function (event) {
  fetch("https://api.weather.gov/points/36.095692,-79.437799")
    .then((response) => response.json())
    .then((data) => showWeather(data.properties.relativeLocation));
  //   // console.log("here");
  //   // if (!event.target.matches("#button")) return;
  //   //   console.log("Button was clicked");
  // fetch("https://api.weather.gov/points/36.095692,-79.437799")
  // // .then(res=>
  // //   {if(res.ok){
  // //     console.log("yes");

  // //     return res.json();
  // //   }else{
  // //     console.log("no");
  // //   }
  // // })
  //   .then((response) => response.json())
  // .then(data=>console.log(data.properties.relativeLocation))
  // // .catch(error=>console.log("error"));
});

function showWeather(object) {
  console.log(object.properties.city);
  console.log(object.properties.state);
}


  fetch("https://api.weather.gov/points/36.095692,-79.437799")
    .then((response) => response.json())
    .then((data) => showWeather(data.properties.relativeLocation));


const btnWeekly = document.getElementById("btn2");
btnWeekly.addEventListener("click", function(event) {
fetch("https://api.weather.gov/gridpoints/RAH/43,67/forecast")
  .then((response) => response.json())

  // .then(data=> console.log(data.properties.periods));
  .then((data) => showTemp(data.properties.periods));
});

function showTemp(list) {
  const container = document.querySelector(".weather-container");
  list.forEach(function (item) {
    const div = document.createElement("div");
    const para = document.createElement("p");
    para.textContent = `Num: ${item.number} \n Temp: ${item.temperature} \n Day: ${item.name}`;
    div.appendChild(para);
    container.appendChild(div);
    // console.log(item.number);
    // console.log(item.temperature);
    // console.log(item.name);
  });
}


// window.addEventListener("fetch", function(event){
//   console.log("event fetched");
// });

// async function fun() {
//   return fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
// }

// const data  = await fun();

//

// function doSomething(success){
//   //do whatever you like
// }

// fetch('http://localhost:3000/api/todos')
//    .then(data => data.json())
//    .then(success => doSomething(success));
