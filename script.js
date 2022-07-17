properties = [
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
    }
]
//Localstorage
let myObject = JSON.stringify(properties);

localStorage.setItem("Object", myObject);
let object = JSON.parse(localStorage.getItem("Object"));
console.log(properties);


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
function showProperties (properties) {
    for(i = 0; i < properties.length; i++){
        console.log(
            document.getElementById("output").innerHTML += `
            <div class="card-container">
            <div class="card">
            <h2>${properties[i].catergory}</h2>
            <p>${properties[i].location}</p>
            <p>${properties[i].price}</p>
            <img src="${properties[i].image}">
            </div>
            </div>`
        );
    }
}


showProperties(properties);

function catergorie() {
    let value = document.getElementById("catergory").value;
    //display entire array when all is selected
    if (value === "All") {
      return showProperties(properties);
    }
    //create array to show only desired housesS
    let filteredProperties = properties.filter((property) => {
      return property.catergory === value     //loop through houses and return houses which id noes not match
    });   
    showProperties(filteredProperties);
  }

  function locations() {
    let value = document.getElementById("location").value;
    //display entire array when all is selected
    if (value === "All") {
      return showProperties(properties);
    }
    let filteredProperties = properties.filter((property) => {
      // create condition to search for value inside of the addrress
      if(property.location.includes(value)){ 
      return property.location } 
          //loop through houses and return houses which id noes not match
    });   
    showProperties(filteredProperties);
  }

  function bathrooms() {
    let value = document.getElementById("bathroom").value;
    //display entire array when all is selected
    if (value === "All") {
      return showProperties(properties);
    }
    //create array to show only desired housesS
    let filteredProperties = properties.filter((property) => {
      return property.bathroom === value     //loop through houses and return houses which id noes not match
    });   
    showProperties(filteredProperties);
  }

  function prices() {
    let value = document.getElementById("price").value;
    //display entire array when all is selected
    if (value === "All") {
      return showProperties(properties);
    }
    //create array to show only desired houses
    let filteredProperties = properties.filter((property) => {
      return property.price === value     //loop through houses and return houses which id noes not match
    });   
    showProperties(filteredProperties);
  }

// function sortHouses(){
//     let price = houses.sort((a, b) => {
//       return a.price - b.price;
//     });
//     let retrievedList = price;
//     document.querySelector("#properties").innerHTML = "";
//     retrievedList.forEach((property) => {
//     showProperties(retrievedList)
//   })
// }