let data = JSON.parse(localStorage.getItem("Object"));
// console.log(data)
// document.write(JSON.stringify(data))

data.forEach(object => {
    document.getElementById("output4").innerHTML += `
    <div id="list-container"><ul class="list"><li>${object.title}</li> <li>${object.artistName}</li> <li>${object.rating}</li><button>Edit</button><button>Delete</button></ul></div>`
});