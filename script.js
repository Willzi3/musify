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