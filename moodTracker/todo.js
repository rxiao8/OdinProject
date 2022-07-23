//have the tasks in an array with each having an id,, checked state,, text
//tasks are orderd based on creation
//allows user to create tags and color codes the tasks based on the tags
//3 tags per task
//can pin/star to prioritize tasks
//allows user to edit the text of the task and delete the task
//checked and unchecked state have different css properties

//grab the todo-list div
const list = document.querySelector(".list");
const listContainer = document.getElementsByClassName("todo-list");
const addBtn = document.getElementsByClassName("add-task-btn");
const header = document.getElementsByClassName("todo-header");
function addTask() {
  const textInput = document.querySelector("#text-input");
  if (textInput.value === "") {
    // console.log("empty");
    // const alertSpan = document.createElement("span");
    // alertSpan.textContent = "No text input. Try again."
    alert("No text input. Try again.");
  } else {
    // console.log("text");

    const task = document.createElement("li");
    task.textContent = textInput.value;
    task.classList.add("unchecked");
    task.classList.add("task");

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    task.appendChild(span);

    list.appendChild(task);
    textInput.value = "";
  }
//Should I use arrays with nodes or a simple li style list in html?

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
}

// list.addEventListener("click", ()=>{
//     console.log()
// });



// //create the 'x' button
// for(var i = 0; i < list.length; i++){
//     var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

