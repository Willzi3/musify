const musicData = [
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Jack Harlow",
        title:"First Class",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Dua Lipa",
        title:"Sweetest Pie",
        rating:"7",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Charlie Puth",
        title:"Light Switch",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Justin Bieber",
        title:"Attention",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Cardi B",
        title:"Shake it",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Shawn Menes",
        title:"When you're Gone",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Harry Styles",
        title:"Late Night Talking",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Megan Thee Stallion",
        title:"Plan B",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"Pusha T",
        title:"Diet Coke",
        rating:"8",
         
    },
    {
        catergory: "Popular Music",
        image:"https://guardian.ng/wp-content/uploads/2022/04/JackHarlow2-1-1536x1024.jpeg",
        artistName:"OneRepublic",
        title:"West Coast",
        rating:"8",
         
    },
    {
        catergory:"Rock",
        artistName:"Deep Purple",
        title:"Smoke on the water",
        rating:"8",
         
    },
    {
        catergory:"Rock",
        artistName:"Pink Floyd",
        title:"Comfortably Numb",
        rating:"8",
         
    },
    {
        catergory:"Rock",
        artistName:"Led Zeppelin",
        title:"Whole lotta love",
        rating:"8",
         
    },
    {
        catergory:"Rock",
        artistName:"Pink Floyd",
        title:"Another brick in the wall",
        rating:"8",
         
    },
    {
        catergory:"Rock",
        artistName:"Jimi Hendrix",
        title:"Purple Haze",
        rating:"8",
         
    },
    {
        catergory:"Pop",
        artistName:"Justin Bieber",
        title:"Stay",
        rating:"8",
         
    },
    {
        catergory:"Pop",
        artistName:"Camila Cabello",
        title:"Bam Bam",
        rating:"8",
         
    },
    {
        catergory:"Pop",
        artistName:"Elton John",
        title:"Cold Heart",
        rating:"8",
         
    },
    {
        catergory:"Pop",
        artistName:"Ed Sheeran",
        title:"Peru",
        rating:"8",
         
    },
    {
        catergory:"Pop",
        artistName:"Lil Nas",
        title:"That's what i want",
        rating:"8",
         
    },
]
const userInfo = [
    {
        userName: "Zachary",
        password: "L13@Nardo01"
    },
    {
        userName: "Lecturer",
        password: "LifeChoices!2022"
    }
]
//LocalStorage
let myObject = JSON.stringify(musicData);

localStorage.setItem("Object", myObject);

let obj = JSON.parse(localStorage.getItem("Object"));

console.log(obj);

//loop through
for(i = 0; i < musicData.length; i++){
    if(musicData[i].catergory === "Popular Music"){
        document.getElementById("output").innerHTML += `
        <div class="popular"> ${musicData[i].title}<br>${musicData[i].artistName} ${musicData[i].rating} </div>`
    }
}
//pop up that asks for username & password
// function popUp(){
//     var userAdjective = prompt(`<input type="text">
//     <input type="text">`);
//     alert (userAdjective);
// }

//Search Bar

document.getElementById("SearchBtn").addEventListener("click", myFunction);
function myFunction() {
    let title = document.getElementById("searchBar").value;
    let data = musicData.find( data => data.title === title);
   document.getElementById("output2").innerHTML = `
   <div class="output3"><h1>Result</h1>${data.title}- ${data.artistName} <li>${data.rating}</li></div>`
       
    }
document.getElementById("option").addEventListener("select", function1);
function function1() {
    let rating = document.getElementById("option").value;
    let getRating = musicData.find( data => data.rating === rating);
    if(rating === getRating){
        // document.getElementById("output2").innerHTML = `
        // <div class="output3">${data.title} ${data.artistName}</div>`
        console.log(data.title)
    }
//    document.getElementById("output2").innerHTML = `
//    <div class="output3"><h1>Result</h1>${getRating.title}- ${getRating.artistName} <li>${getRating.rating}</li></div>`
       
    }
    

   
// function display() {
//     if(title === musicData[i].title){
//         document.getElementById("SearchBar").innerHTML = hello
//     }
//   }


  