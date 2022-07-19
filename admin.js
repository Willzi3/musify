let houses = JSON.parse(localStorage.getItem("houses"))
? JSON.parse(localStorage.getItem("houses")):[
  {id:1,
    image: 'https://i.postimg.cc/SQV4dBmS/apartment1.jpg',
 title:'Light and Modern Apartment',
 price: '4500',
 bedrooms:'3',
 bathrooms:'2',
 garage:'1',
 size:'1200',
 type:'Apartment',
 user:' Samuel Palmer',
 datePosted:'04/04/2020',
 yearBuilt:'2016',
},

{id:2,
    image:'https://i.postimg.cc/TPrMDSkX/apartment2.jpg',
title:'Cute Apartment',
price: '4500',
bedrooms:'3',
bathrooms:'2',
garage:'1',
size:'1200',
type:'Apartment',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},
{id:3,
image: 'https://i.postimg.cc/vBbRLzjx/apartment3.jpg',
title:'Cozy Apartment',
price: '4500',
bedrooms:'2',
bathrooms:'2',
garage:'1',
size:'1200',
type:'Apartment',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},
{id:4,
image: 'https://i.postimg.cc/bNBhc1G4/apartment4.jpg',
title:'Newly Built Apartment',
price: '4500',
bedrooms:'3',
bathrooms:'2',
garage:'1',
size:'1200',
type:'Apartment',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},
{id:5,
image: 'https://i.postimg.cc/RhZj20vM/house1.jpg',
title:'Fully Furnished Apartment',
price: '6000',
bedrooms:'2',
bathrooms:'4',
garage:'1',
size:'1200',
type:'Apartment',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},
{id:6,
image: 'https://i.postimg.cc/RhZj20vM/house1.jpg',
 title:'North Facing House',
 price: '6000',
 bedrooms:'5',
 bathrooms:'2',
 garage:'1',
 size:'1200',
 type:'House',
 user:' Samuel Palmer',
 datePosted:'04/04/2020',
 yearBuilt:'2016',
},
{id:7,
    image: 'https://i.postimg.cc/5tcWj1S3/house2.jpg',
title:'Newly Built House',
price: '4500',
bedrooms:'4',
bathrooms:'2',
garage:'1',
size:'1200',
type:'House',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},
{id:8,
image: 'https://i.postimg.cc/ydPMfR4Q/house3.jpg',
title:'Grand Mansion',
price: '10000',
bedrooms:'5',
bathrooms:'2',
garage:'1',
size:'1200',
type:'House',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},
{id:9,
image: 'https://i.postimg.cc/gcM983Kr/house4.jpg',
title:'Bachelor Pad',
price: '4500',
bedrooms:'1',
bathrooms:'2',
garage:'1',
size:'1200',
type:'Studio',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},
{id:10,
image: 'https://i.postimg.cc/gk5fBdQW/house5.jpg',
title:'Penthouse Open Floor',
price: '10000',
bedrooms:'2',
bathrooms:'2',
garage:'1',
size:'1200',
type:'Studio',
user:' Samuel Palmer',
datePosted:'04/04/2020',
yearBuilt:'2016',
},];

localStorage.setItem("houses", JSON.stringify(houses));
// display local storage    
// document.getElementById("propertyList").innerHTML = JSON.parse( localStorage.getItem("houses"));
    const propertiesTable = document.querySelector("#propertylist");

function ShowHouseListings (houses) {
    document.querySelector("#propertylist").innerHTML = "";
  
    houses.forEach(house => {
      propertiesTable.innerHTML += `
        <tr>
        <td>${house.id}</td>
          <td><img src=${house.image}></td>
          <td>${house.type}</td>
          <td>${house.bathrooms}</td>
          <td>${house.price}</td>
          <td><button onclick="editHouse(${house.id})">Edit</button> </td><td><button onclick="deleteHouse(${house.id})">Delete</button></td>
        <tr>
      `;
    })
  };
  
ShowHouseListings(houses);

// delete function
function deleteHouse(id) {
  houses = houses.filter((house) => {
    return house.id !== id;     //loop through houses and return houses which id noes not match
  });   
  localStorage.setItem("houses", JSON.stringify(houses));
  ShowHouseListings(houses);
}


// edit house listing 
function editHouse(id) {
  let house = houses.find((house) => house.id === id); //Finds the id of button that was clicked
  let type = prompt("Input Changes"); //Allows the user to input their own changes
  house.type = type; //Changes the content to what the user's input

  let bathrooms = prompt("Input Changes"); //Allows the user to input their own changes
  house.bathrooms = bathrooms; //Changes the content to what the user's input
  
  

  // addToStorage(objectives); //Adds to local storage
  ShowHouseListings(houses);
}

function addListing() {
  let listing = {
    id: houses.length + 1,

    image: document.querySelector("#Image").value,
    type: document.querySelector("#Type").value,
    baths: document.querySelector("#Bathrooms").value,
    price: document.querySelector("#Price").value,
  };
  houses.push(listing);
  localStorage.setItem("properties", JSON.stringify(houses));
  
  ShowHouseListings(houses);
  console.log(houses);
}

function typeHouse() {
  let value = document.getElementById("comboA").value;
  //display entire array when all is selected
  if (value === "All") {
    return ShowHouseListings(houses);
  }
  //create array to show only desired housesS
  let filteredHouses = houses.filter((house) => {
    return house.type === value     //loop through houses and return houses which id noes not match
  });   
  ShowHouseListings(filteredHouses);
}

function addressHouse() {
  let value = document.getElementById("comboB").value;
  //display entire array when all is selected
  if (value === "All") {
    return ShowHouseListings(houses);
  }
  let filteredHouses = houses.filter((house) => {
    // create condition to search for value inside of the addrress
    if(house.address.includes(value)){ 
    return house.address } 
        //loop through houses and return houses which id noes not match
  });   
  ShowHouseListings(filteredHouses);}

function bedroomsHouse() {
  let value = document.getElementById("comboC").value;
  //display entire array when all is selected
  if (value === "All") {
    return ShowHouseListings(houses);
  }
  //create array to show only desired housesS
  let filteredHouses = houses.filter((house) => {
    return house.bedrooms === value     //loop through houses and return houses which id noes not match
  });   
  ShowHouseListings(filteredHouses);}

function priceHouse() {
  let value = document.getElementById("comboD").value;
  //display entire array when all is selected
  if (value === "All") {
    return ShowHouseListings(houses);
  }
  //create array to show only desired houses
  let filteredHouses = houses.filter((house) => {
    return house.price === value     //loop through houses and return houses which id noes not match
  });   
  ShowHouseListings(filteredHouses);}

