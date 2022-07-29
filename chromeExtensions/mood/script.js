const weight = document.getElementById("weight-btn");
const waist = document.getElementById("waist-btn");

const btn = document.querySelector("#add");
btn.addEventListener("click", function(event) {const today = new Date();
var todayStr = today.getDate() + "/" + today.getDay() + "/" + today.getFullYear();
var valStr = [weight.value, waist.value];
chrome.storage.sync.set({todayStr: valStr}, function() {
	location.reload();
});
});

function table(date, weight, waist){

}

// $("#next").click(function() {
//     location.replace("/index2.html");
// })