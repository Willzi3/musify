let data = JSON.parse(localStorage.getItem("Object"));
// console.log(data)
// document.write(JSON.stringify(data))

data.forEach(object => {
    document.getElementById("output4").innerHTML += `
    <div id="list-container"><ul class="list"><li>${object.title}</li> <li>${object.artistName}</li> <li>${object.rating}</li><button>Edit</button><button>Delete</button></ul></div>`
});
// EveentListener for
function myFunctions() {
    let title = document.getElementById("search-bar").value;
    let data = musicData.find( data => data.title === title);
   document.getElementById("output2").innerHTML = `
   <div class="output3"><h1>Result</h1>${data.title}- ${data.artistName} <li>${data.rating}</li></div>`
       
    }