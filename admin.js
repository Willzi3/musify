let data = JSON.parse(localStorage.getItem("Object"));
/*
let data = JSON.parse(localStorage.getItem("Object")) ? 
JSON.parse(localStorage.getItem("Object")) : [
    {
        id:1
    }
]
*/
// display from localStorrage
data.forEach(object => {
    document.getElementById("output4").innerHTML += `
        <table id="table">
            <tr>
                <td>${object.title}</td>
                <td>${object.artistName}</td>
                <td>${object.rating}</td>
            </tr>
        </table>`
});

let rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
let isEmpty = false,
    title = document.getElementById("title").value,
    artistName = document.getElementById("artistName").value,
    rating = document.getElementById("rating").value;

if(title === ""){
    alert("Title Missing");
    isEmpty = true;
}
else if(artistName === ""){
    alert("artist Name Missing");
    isEmpty = true;
}
else if(rating === ""){
    alert("rating Missing");
    isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
if(!checkEmptyInput()){
let newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    title = document.getElementById("title").value,
    artistName = document.getElementById("artistName").value,
    rating = document.getElementById("rating").value;

cell1.innerHTML = title;
cell2.innerHTML = artistName;
cell3.innerHTML = rating;
// 
data.push( 
    {
        id: data.length + 1,
        artistName: artistName,
        title: title,
        rating: rating,
    });
localStorage.setItem('Object',JSON.stringify(data));
console.log(data);

// call the function to set the event to the new row
selectedRowToInput();
}

}

// display selected row data into input text
function selectedRowToInput()
{

for(let i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("title").value = this.cells[0].innerHTML;
      document.getElementById("artistName").value = this.cells[1].innerHTML;
      document.getElementById("rating").value = this.cells[2].innerHTML;
    };
}
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
let title = document.getElementById("title").value,
    artistName = document.getElementById("artistName").value,
    rating = document.getElementById("rating").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = title;
table.rows[rIndex].cells[1].innerHTML = artistName;
table.rows[rIndex].cells[2].innerHTML = rating;
}
localStorage.setItem('Object',JSON.stringify(data))
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("title").value = "";
document.getElementById("artistName").value = "";
document.getElementById("rating").value = "";
}
localStorage.setItem('Object',JSON.stringify(data))