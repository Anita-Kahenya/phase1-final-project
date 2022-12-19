const option= document.getElementById("cat")
option.addEventListener("mouseover", handlehover)

const category =  document.querySelector("#categories")

category.addEventListener("mouseleave", handleleave)

function handlehover (event){
   category.style.display = "block"
}

let options = document.querySelectorAll("option")
for(let opt of options) {
    opt.addEventListener("click", categoryClick)
}

function categoryClick(event){
   filterArts(event.target.textContent.toLowerCase())
}

function filterArts(cat) {
    
    fetch("https://api.jsonbin.io/v3/b/63a0708501a72b59f2347c5c/latest",{
        headers:{
            "X-Master-Key":"$2b$10$.PDAmlgr1Tbjg/pEtIqQH.v1jwP0ZJEXajNZz5L/rFYWK.21kkwDC"
        }
    })
    .then(res=>res.json())
    .then(arts => {
       
       let filteredarts =  arts.record.art.filter(art => art.category === cat)
        document.getElementById("artisty").textContent = ""
       GetDetails(filteredarts)

    })
}

function handleleave (event){
    document.querySelector("#categories").style.display = "none"

}
function fetchData(url,){
    fetch(url,{
        headers:{
            "X-Master-Key":"$2b$10$.PDAmlgr1Tbjg/pEtIqQH.v1jwP0ZJEXajNZz5L/rFYWK.21kkwDC"
        }
    })
    .then(res=>res.json())
    .then(arts=> {
        GetDetails(arts.record.art)
       
    })
}
fetchData("https://api.jsonbin.io/v3/b/63a0708501a72b59f2347c5c/latest")

function GetDetails(arts){
    for (let art of arts){
        displayArt(art)
    }  
}
function displayArt(detail){
    const showArt= document.querySelector("#artisty")
    let card=document.createElement("div")
    let img= document.createElement("img")
    img.setAttribute("src", detail.image)
    
    let artist= document.createElement("h1")
    artist.textContent = detail["Artist-name"]

    let name = document.createElement("h3")
    name.textContent = detail.name

    let description = document.createElement("p")
    description.textContent = detail.description

    let cost = document.createElement("p")
    cost.textContent = detail.cost

    let addToCart = document.createElement("button")
    addToCart.textContent = "Add Cart"
    addToCart.classList.add("cartbuttons")
    card.append(img, artist, name, description, cost, addToCart)

    addToCart.addEventListener("click", e => {
        addArtToCart(detail)
    })

    card.classList.add("arts")
    showArt.appendChild(card)
}

function viewCart(event) {
    document.getElementById("cart").style.display = "block"
}
function hideCart(event) {
    document.getElementById("cart").style.display = "none"
}

function addArtToCart(detail) {
    const showArt= document.querySelector("#items")
    let card=document.createElement("div")
    let img= document.createElement("img")
    img.setAttribute("src", detail.image)

    let name = document.createElement("h3")
    name.textContent = detail.name

    let cost = document.createElement("p")
    cost.textContent = detail.cost

    card.append(img, name, cost)

    card.classList.add("arts-cart")
    showArt.appendChild(card)
}