//https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
const addBtn2 = document.getElementById("here");
const tble = document.querySelector(".tbl-body");
const weight = document.getElementById("weight");
const waist = document.getElementById("waist");
const glute = document.getElementById("glute");

addBtn2.addEventListener("click", () => {

  var today2 = new Date();
  var dd2 = String(today2.getDate());
  var mm2 = String(today2.getMonth() + 1); //January is 0!
  var yyyy2 = today2.getFullYear();

  today2 = mm2 + "/" + dd2 + "/" + yyyy2;
  const row = document.createElement("tr");
  const date = document.createElement("td");
  const weight = document.createElement("td");
  const waist = document.createElement("td");
  const glute = document.createElement("td");

  date.classList.add("dateCSS");
  weight.classList.add("weightCSS");

  date.textContent = today2;
  weight.textContent = weight.value;
  waist.textContent = waist.value;
  glute.textContent = glute.value;

  row.appendChild(date);
  row.appendChild(weight);
  row.appendChild(waist);

  tble.appendChild(row);

//   weight.textContent = "";
//   waist.textContent = "";
//   glute.textContent = "";

  const key = today2;
  const value = [weight, waist, glute];

  if (key && value) {
    localStorage.setItem(key, value);
    //sets the input to blank
    location.reload();
  }

//   console.log(localStorage);
});

for (var i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const val = localStorage.getItem(key);
  console.log(key,val);
}

