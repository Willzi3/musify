let houses = JSON.parse(localStorage.getItem("houses"))
? JSON.parse(localStorage.getItem("houses")):[
    {id:1,
        image: 'https://picsum.photos/id/1008/200/300',
     title:'Light and Modern Apartment',
     price: '4500',
     address:'2436 SW 8th St, Los Angeles, FL 33135, USA',
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
        image:'https://picsum.photos/id/164/200/300',
    title:'Cute Apartment',
    price: '4500',
    address:'2436 SW 8th St, Los Angeles, FL 33135, USA',
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
    image: 'https://picsum.photos/id/1062/200/300',
   title:'Cozy Apartment',
   price: '4500',
   address:'2436 SW 8th St, Miami, FL 33135, USA',
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
    image: 'https://picsum.photos/id/238/200/300',
  title:'Newly Built Apartment',
  price: '4500',
  address:'2436 SW 8th St, Chicago, FL 33135, USA',
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
    image: 'https://picsum.photos/id/221/200/300',
 title:'Fully Furnished Apartment',
 price: '6000',
 address:'2436 SW 8th St, Los Angeles, FL 33135, USA',
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
    image: 'https://picsum.photos/id/556/200/300',
     title:'North Facing House',
     price: '6000',
     address:'2436 SW 8th St, Miami, FL 33135, USA',
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
        image: 'https://picsum.photos/id/594/200/300',
    title:'Newly Built House',
    price: '4500',
    address:'2436 SW 8th St, New York, FL 33135, USA',
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
    image: 'https://picsum.photos/id/142/200/300',
   title:'Grand Mansion',
   price: '10000',
   address:'2436 SW 8th St, Miami, FL 33135, USA',
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
    image: 'https://picsum.photos/id/604/200/300',
  title:'Bachelor Pad',
  price: '4500',
  address:'2436 SW 8th St, Chicago, FL 33135, USA',
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
    image: 'https://picsum.photos/id/1031/200/300',
 title:'Penthouse Open Floor',
 price: '10000',
 address:"'2436 SW 8th St',' New York','FL 33135 USA'",
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
          <td><button onclick="editHouse(${house.id})">✎</button> </td><td><button onclick="deleteHouse(${house.id})">✂</button></td>
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
  let input = prompt("Input Changes"); //Allows the user to input their own changes
  house.title = input; //Changes the content to what the user's input
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

