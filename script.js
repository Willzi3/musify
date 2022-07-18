let houses = JSON.parse(localStorage.getItem("houses"))
? JSON.parse(localStorage.getItem("houses")):[
    {id:1,
        image: 'https://picsum.photos/id/1008/200/300',
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
        image:'https://picsum.photos/id/164/200/300',
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
    image: 'https://picsum.photos/id/1062/200/300',
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
    image: 'https://picsum.photos/id/238/200/300',
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
    image: 'https://picsum.photos/id/221/200/300',
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
    image: 'https://picsum.photos/id/556/200/300',
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
        image: 'https://picsum.photos/id/594/200/300',
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
    image: 'https://picsum.photos/id/142/200/300',
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
    image: 'https://picsum.photos/id/604/200/300',
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
    image: 'https://picsum.photos/id/1031/200/300',
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

   const propertiesContainer = document.querySelector("#properties");

// add array to local storage   
   localStorage.setItem("houses", JSON.stringify(houses));
   
// display local storage    
document.getElementById("properties").innerHTML = JSON.parse( localStorage.getItem("houses"));

function showHouses (houses) {
    propertiesContainer.innerHTML = "";
    houses.forEach(house => {
        propertiesContainer.innerHTML += `
            <div id='housecards'>
                <img src=${ house.image } />
                 <h3>${house.title}</h3>


                 <ul id=house-values>
                 <li><i class="fa-solid fa-bed"></i>${house.bedrooms}</li>
                 <li><i class="fa-solid fa-shower"></i>${house.bathrooms}</li>
                 <li><i class="fa-solid fa-dollar"></i>${house.price}/mo</li>
                <li><i class="fa-solid fa-car"></i>${house.garage}</li>
                <li><i class="fa-solid fa-ruler"></i>${house.size}</li>
                


            </div>
        `
    })
};

showHouses(houses);

function typeHouse() {
    let value = document.getElementById("comboA").value;
    if (value === "All") {
      return showHouses(houses);
    }
    let filteredHouses = houses.filter((house) => {
      return house.type === value 
    });   
    showHouses(filteredHouses);
  }

  function addressHouse() {
    let value = document.getElementById("comboB").value;
    if (value === "All") {
      return showHouses(houses);
    }
    let filteredHouses = houses.filter((house) => {
      if(house.address.includes(value)){ 
      return house.address } 
    });   
    showHouses(filteredHouses);
  }

  function bedroomsHouse() {
    let value = document.getElementById("comboC").value;
    if (value === "All") {
      return showHouses(houses);
    }
    let filteredHouses = houses.filter((house) => {
      return house.bedrooms === value
    });   
    showHouses(filteredHouses);
  }

  function priceHouse() {
    let value = document.getElementById("comboD").value;
    if (value === "All") {
      return showHouses(houses);
    }


    let filteredHouses = houses.filter((house) => {
      return house.price === value 
    });   
    showHouses(filteredHouses);
  }

function sortHouses(){
    let price = houses.sort((a, b) => {
      return a.price - b.price;
    });
    let retrievedList = price;
    document.querySelector("#properties").innerHTML = "";
    retrievedList.forEach((propperty) => {
    showHouses(retrievedList)
  })
}