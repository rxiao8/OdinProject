//have the tasks in an array with each having an id,, checked state,, text
//tasks are orderd based on creation
//allows user to create tags and color codes the tasks based on the tags
//3 tags per task
//can pin/star to prioritize tasks
//allows user to edit the text of the task and delete the task
//checked and unchecked state have different css properties



// Click on a close button to hide the current list item
var crossedOut = document.getElementsByClassName("crossedOut");
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
  console.log("here");
}, false);

//grab the todo-list div
// const list = document.querySelector(".list");
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

    const li = document.createElement("li");
    var t = document.createTextNode(textInput.value);
 
    // li.classList.add("task");
    li.appendChild(t);

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "crossedOut";
    span.appendChild(txt);
    li.appendChild(span);

    list.appendChild(li);
    
    for ( var i = 0; i < crossedOut.length; i++) {
      crossedOut[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
          //cross out the text
    // div.style.textDecoration = "line-through";

      }
    }

    textInput.value = "";
  }
}