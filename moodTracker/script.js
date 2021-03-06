// //import the xlsx pkg
// var xlsx = require("xlsx");

// // //grab the wb
// var wb = xlsx.readFile("xlsx/Financial Sample.xlsx",{cellDates: true});
// //grab a sheet of the wb
// var ws = wb.Sheets["Sheet1"];
// const data = xlsx.utils.sheet_to_json(ws);

// //loop through arr and create a new map with a callback function
// var newData = data.map(function(record){
//     record.CumTotal = record.Sales - record.COGS;
//     delete record.Sales;
//     delete record.COGS;
//     delete record["Gross Sales"];
//     //return the object back to the array
//     return record;

// });

// const newWB = xlsx.utils.book_new();
// const newWS = xlsx.utils.json_to_sheet(newData);
// xlsx.utils.book_append_sheet(newWB, newWS, "New Data");
// // console.log(data);

// // xlsx.writeFile(newWB, "xlsx/New Data File.xlsx");
// var wb2 = xlsx.readFile("xlsx/New Data File.xlsx",{cellDates: true});

// var ws2 = wb2.Sheets["New Data"];
// console.log(ws2);


/*So,, the following code does work but it will not fetch the file in the browser since the readFile() is a server function..and browsers cannot do file management. At least I do not know how to do it. Therefore,, I will create a HTML table,, input data there,, and have the option to export it as a excel file in the end & possibly generate a line graph.*/

// @deno-types="https://unpkg.com/xlsx/types/index.d.ts"
import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';

/* load the codepage support library for extended support with older formats  */
import * as cptable from 'https://unpkg.com/xlsx/dist/cpexcel.full.mjs';
XLSX.set_cptable(cptable);

//fetch the corresponding btns
const weightInput = document.getElementById("weight-input");
const waistInput = document.getElementById("waist-input");
const btn = document.querySelector(".weightBtn");

 function addWeight(weightInput, waistInput, btn){
//read in the ws
var wbWeight = XLSX.readFile("/home/rozie/Documents/repos/OdinProject/moodTracker/workBook/WeightBook.xlsx", {cellDates: true});
//grab the desired ws
var wsWeight = wbWeight.Sheets["Weight"];
//convert the data into an arr of json
const dataWeight = XLSX.utils.sheet_to_json(wsWeight);
console.log(dataWeight);

//input the curr data,, weight,, and waist (opt)
var today2 = new Date();
var dd2 = String(today2.getDate());
var mm2 = String(today2.getMonth() + 1); //January is 0!
var yyyy2 = today2.getFullYear();

today2 = mm + '/' + dd + '/' + yyyy;

//adds data to a new row
XLSX.utils.sheet_add_aoa(wsWeight, [
    [today2, weightInput.value, waistInput.value]
  ], {origin: -1});

//writes the new ws to the same wb
XLSX.writeFile(wbWeight,"/home/rozie/Documents/repos/OdinProject/moodTracker/workBook/WeightBook.xlsx" );
}


btn.addEventListener("click", addWeight);
// // wsWeight.utils.json_to_sheet(dataWeight);
// const newWS = xlsx.utils.json_to_sheet(dataWeight);
// xlsx.utils.book_append_sheet(wbWeight, newWS, "Weight");
// console.log(dataWeight[0]);i

// const weightBtn = document.querySelector(".weightBtn");
// const waistBtn = document.querySelector(".waistBtn");
// const dataWeight = xlsx.utils.sheet_to_json(wsWeight);
// weightBtn.addEventListener("click", function(event){
//     var val = document.getElementById("weight-input");
//     var val2 = document.getElementById("waist-input");
//     dataWeight[dataWeight.length] = [[(new Date).getDate(), val, val2]];
// });
