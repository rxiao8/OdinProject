//import the xlsx pkg
var xlsx = require("xlsx");
// //grab the wb
var wb = xlsx.readFile("xlsx/Financial Sample.xlsx",{cellDates: true});
//grab a sheet of the wb
var ws = wb.Sheets["Sheet1"];
const data = xlsx.utils.sheet_to_json(ws);

//loop through arr and create a new map with a callback function
var newData = data.map(function(record){
    record.CumTotal = record.Sales - record.COGS;
    delete record.Sales;
    delete record.COGS;
    delete record["Gross Sales"];
    //return the object back to the array
    return record;

});

const newWB = xlsx.utils.book_new();
const newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB, newWS, "New Data");
// console.log(data);

// xlsx.writeFile(newWB, "xlsx/New Data File.xlsx");
var wb2 = xlsx.readFile("xlsx/New Data File.xlsx",{cellDates: true});

var ws2 = wb2.Sheets["New Data"];
console.log(ws2);