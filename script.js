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

let sort = musicData.filter((value, index, arr) => {
    for(i = 0; i < musicData.length; i++){
        if(musicData[i].catergory){
            document.getElementById("output1").innerHTML += `
            <div class="popular"> ${musicData[i].catergory}</div>`
        }
    }
    
})
console.log(sort);
