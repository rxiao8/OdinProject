// const weightInput = document.getElementById("weight-input");
// const waistInput = document.getElementById("waist-input");
// const btn = document.querySelector(".weightBtn");
// const tble = document.querySelector(".body-tble");
// function addData() {
//   //input the curr data,, weight,, and waist (opt)
//   var today2 = new Date();
//   var dd2 = String(today2.getDate());
//   var mm2 = String(today2.getMonth() + 1); //January is 0!
//   var yyyy2 = today2.getFullYear();

//   today2 = mm2 + '/' + dd2 + '/' + yyyy2;
// const row = document.createElement("tr");
//   const date = document.createElement("td");
//   const weight = document.createElement("td");
//   const waist = document.createElement("td");

//   date.classList.add("dateCSS");
//   weight.classList.add("weightCSS");

//   date.textContent = today2;
//   weight.textContent = weightInput.value;
//   waist.textContent = waistInput.value;

//   row.appendChild(date);
//   row.appendChild(weight);
//   row.appendChild(waist);

//   tble.appendChild(row);

//   weightInput.textContent ="";
//   waistInput.textContent = "";

// }

// btn.addEventListener('input', function() {
//     localStorage.setItem(weightInput.value, waistInput.value); // Use .value to get and set text of input but use .textContent to get and set text of other elements (textareas, divs, etc.)
// });

// btn.value = localStorage.getItem(weightInput.value);
