let data = JSON.parse(localStorage.getItem("Object"));
// console.log(data)
// document.write(JSON.stringify(data))
// data.sort(function (a, b){
//     return a.rating - b.rating;
// })
console.log(data)
data.forEach(object => {
    document.getElementById("output4").innerHTML += `
    <div id="list-container"><ul class="list"><li>${object.title}</li> <li>${object.artistName}</li> <li>${object.rating}</li><button id="edit">Edit</button><button id="Delete" onclick="deleteTask()" >Delete</button></ul></div>`
});
// EveentListener for
function myFunctions() {
    let title = document.getElementById("search-bar").value;
    let data = musicData.find( data => data.title === title);
   document.getElementById("output2").innerHTML = `
   <div class="output3"><h1>Result</h1>${data.title}- ${data.artistName} <li>${data.rating}</li></div>`
       
    }

    // //sorting
   
    let sort = document.getElementById("output5").innerHTML = `
    <label>Sort By:</label>
    <select class="sort" id="sort" onchange="Func()">
    <option value="ArtistName">ArtistName</option>
    <option value="Catergory">Catergory</option>
    <option value="Title">Title</option>
    <option value"Rating">Rating</option>
    <option value=""></option>
    </select>`

    function Func() {
        let Sort = document.getElementById("sort").value;
        console.log(Sort);

        data.sort()
        if(Sort === data.title){
            document.getElementById("output5").innerHTML += `
            <div>${data[i].title}</div>`


        }else if(Sort === data[i].artistName) {
            document.getElementById("output5").innerHTML += `
            <div>${data[i].artistName}</div>`
        }else if(Sort === data[i].rating){
            document.getElementById("output5").innerHTML += `
            <div>${data[i].rating}</div>`
        }else if(Sort === data[i].catergory) {
            document.getElementById("output5").innerHTML += `
            <div>${data[i].title}</div>`
        } else {
            document.getElementById("output5").innerHTML += `
            <div>${data[i].id} ${data[i].title} ${data[i].artistName}</div>`
        }
    }

    let addItem = document.getElementById("output6").innerHTML = `
    <button type="button" id="BTN" onclick="addCourses()">Add Items</button>`
    //Search specific item 
    let searchItems = document.getElementById("search-bar").value;
    for(i = 0; i < data.length; i++){
        if(searchItems === data[i].artistName){
            document.getElementById("output4").innerHTML += "hello  "      }
    }

    //add item

    let courses = document.getElementById("output5").innerHTML = `
    <div id="modal">
    <input type="text" name="image" id="image" placeholder="image">
    <input type="text" name="title" id="title" placeholder=title"">
    <input type="text" name="catergory" id="catergory" placeholder="catergory">
    <input type="text" name="artist-Name" id="artist-name" placeholder="artistName">
    <input type="text" name="rating" id="rating" placeholder="rating">
    </div>`
function addCourses() {
    const newCourse = {
      image: document.querySelector("#image").value,
      title: document.querySelector("#title").value,
      type: document.querySelector("#catergory").value,
      location: document.querySelector("#artist-name").value,
      size: document.querySelector("#rating").value,
      id: data.length + 1,
    };
    data.push(newCourse);
    localStorage.setItem("Object", JSON.stringify(data));
    showCourses.reload(data);
  }

  document.querySelector("#BTN").addEventListener("click", addCourses);

  //delete item

  function deleteTask(id) {
    data = data.filter((track) => track.id !== id);
    localStorage.setItem("Object", JSON.stringify(data));
    showCourses(data);
  }

  let asc = true;
const tracksContainer = document.querySelector("#output4");
function showCourses(data) {
  tracksContainer.innerHTML = "";
  console.log("hello");
  data.forEach((track) => {
    tracksContainer.innerHTML += `
      <tr>
        <th scope="row">${track.id}</th>
        <td>${track.image}</td>
        <td>${track.title}</td>
        <td>${track.catergory}</td>
        <td>${track.artistName}</td>
        <td>${track.rating}</td>
        <td><i class="fa-solid fa-pen-to-square p-3"></i>
        <i onclick="deleteTask(${track.id})" class="fa-solid fa-trash-can p-3"></i></td>
      </tr>
       `;
  });
}
  
// console.log(data)
// console.log(data)
