Properties = [
    {
        id: 1,
        image: "https://picsum.photos/200/?random=1",
        catergory: "Apartment",
        location: "Melkbosstrand",
        price: "4 500 000"
    },
    {
        id: 2,
        image: "https://picsum.photos/200/?random=2",
        catergory: "Apartment",
        location: "Clifton",
        price: "5 500 000"
    },
    {
        id: 3,
        image: "https://picsum.photos/200/?random=3",
        catergory: "House",
        location: "Camps Bay",
        price: "6 500 000"
    },
    {
        id: 4,
        image: "https://picsum.photos/200/?random=4",
        catergory: "House",
        location: "Camps Bay",
        price: "6 500 000"
    },
    {
        id: 5,
        image: "https://picsum.photos/200/?random=5",
        catergory: "Office",
        location: "Camps Bay",
        price: "6 500 000"
    },
    {
        id: 6,
        image: "https://picsum.photos/200/?random=6",
        catergory: "Office",
        location: "Camps Bay",
        price: "6 500 000"
    },
    {
        id: 7,
        image: "https://picsum.photos/200/?random=7",
        catergory: "Business",
        location: "Camps Bay",
        price: "6 500 000"
    },
    {
        id: 8,
        image: "https://picsum.photos/200/?random=8",
        catergory: "Business",
        location: "Camps Bay",
        price: "6 500 000"
    },
    {
        id: 9,
        image: "https://picsum.photos/200/?random=9",
        catergory: "Farms",
        location: "Camps Bay",
        price: "6 500 000"
    },
    {
        id: 10,
        image: "https://picsum.photos/200/?random=10",
        catergory: "Farms",
        location: "Camps Bay",
        price: "6 500 000"
    }
]

let formOptions = document.getElementById("form").innerHTML = `
<form>
<select><option value="">Option</option></select>
<select><option value="">Option</option></select>
<select><option value="">Option</option></select>
<select><option value="">Option</option></select>
</form>
`

//looping through objects

for(i = 0; i < Properties.length; i++){
    console.log(
        document.getElementById("output").innerHTML += `
        <div class="card-container">
        <div class="card">
        <h2>${Properties[i].catergory}</h2>
        <p>${Properties[i].location}</p>
        <img src="${Properties[i].image}">
        <p>${Properties[i].price}</p>
        </div>
        </div>`
    );
}
