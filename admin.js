let properties = JSON.parse(localStorage.getItem("Object"))
? JSON.parse(localStorage.getItem("Object")):[
    {
        id: 1,
        image: "https://picsum.photos/200/?random=1",
        catergory: "Apartment",
        location: "Melkbosstrand",
        price: "2 500 000",
        bathroom: '4'
    },
    {
        id: 2,
        image: "https://picsum.photos/200/?random=2",
        catergory: "House",
        location: "Clifton",
        price: "4 000 000",
        bathroom: '4'
    },
    {
        id: 3,
        image: "https://picsum.photos/200/?random=3",
        catergory: "Studio",
        location: "Table View",
        price: "6 500 000",
        bathroom: '3'
    },
    {
        id: 4,
        image: "https://picsum.photos/200/?random=4",
        catergory: "Apartment",
        location: "Llandudno",
        price: "4 000 000",
        bathroom: '2'
    },
    {
        id: 5,
        image: "https://picsum.photos/200/?random=5",
        catergory: "House",
        location: "Clifton",
        price: "8 000 000",
        bathroom: '1'
    },
    {
        id: 6,
        image: "https://picsum.photos/200/?random=6",
        catergory: "Studio",
        location: "Llandudno",
        price: "4 000 000",
        bathroom: '1'
    },
    {
        id: 7,
        image: "https://picsum.photos/200/?random=7",
        catergory: "Apartment",
        location: "Table View",
        price: "2 500 000",
        bathroom: '2'
    },
    {
        id: 8,
        image: "https://picsum.photos/200/?random=8",
        catergory: "House",
        location: "Clifton",
        price: "8 000 000",
        bathroom: '3'
    },
    {
        id: 9,
        image: "https://picsum.photos/200/?random=9",
        catergory: "Studio",
        location: "Melkbosstrand",
        price: "2 500 000",
        bathroom: '4'
    },
    {
        id: 10,
        image: "https://picsum.photos/200/?random=10",
        catergory: "Apartment",
        location: "Llandudno",
        price: "6 500 000",
        bathroom: '3'
    },];
//form for filtering and searchbar
let formOptions = document.getElementById("form").innerHTML = `

<form>
<label>catergory</label>
<select id="catergory" onchange="catergorie()">
<option value="All">All</option>
<option value="Apartment">Apartment</option>
<option value="House">House</option>
<option value="Studio">Studio</option>
</select>


<label>price</label>
<select  id="price" onchange="prices()">
<option value="All">All</option>
<option value="2 500 000">R2 500 000</option>
<option value="4 000 000">R4 000 000</option>
<option value="6 500 000">R6 500 000</option>
<option value="8 000 000">R8 000 000</option>
</select>


<label>Bathroom</label>
<select onchange="bathrooms()" id="bathroom">
<option value="All">All</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>


<label>location</label>
<select onchange="locations()" id="location">
<option value="All">All</option>
<option value="Melkbosstrand">Melkbosstrand</option>
<option value="Table View">Table View</option>
<option value="Clifton">Clifton</option>
<option value="Llandudno">Llandudno</option>
</select>
</form>
`
localStorage.setItem("Object", JSON.stringify(properties));
// display local storage    
// document.getElementById("propertyList").innerHTML = JSON.parse( localStorage.getItem("houses"));
   

let search = document.getElementById("Output").innerHTML = `
<div class="search-container">
<input type="text" name="search" id="searchBar" placeholder="Search..."/>
<button type="button" onclick="Search()">Search</button>
</div>
`



function Search() {
    let search = document.getElementById("searchBar").value;
    for(i = 0; i < properties.length; i++){
        if(search === properties[i].catergory){
            document.getElementById("Output").innerHTML += `
            <div class="searchy">
            <div><img src="${properties[i].image}"/></div>
            <div>${properties[i].price}</div>
            <div>${properties[i].catergory}</div>
            <div>${properties[i].location}</div>
            </div>`
        } 
        else if (search === properties[i].location){
            document.getElementById("Output").innerHTML += `
            <div class="searchy">
            <div class="search-item"><img src="${properties[i].image}"/></div>
            <div class="search-item">${properties[i].price}</div>
            <div class="search-item">${properties[i].catergory}</div>
            <div class="search-item">${properties[i].location}</div>
            <button type="button" onclick="delete()">delete</button>
            <button type="button" onclick="edit()">edit</button>
            </div>`
        }
       
    }
    }

    // delete function
function deleteProperties(id) {
    Properties = Properties.filter((property) => {
      return property.id !== id;     //loop through houses and return houses which id noes not match
    });   
    localStorage.setItem("Object", JSON.stringify(Properties));
    
  }