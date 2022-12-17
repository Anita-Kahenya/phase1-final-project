const option= document.getElementById("categories")
option.addEventListener("mouseover", handlehover)
function handlehover (event){
    

}
function fetchData(url){
    fetch(url)
    .then(res=>res.json())
    .then(arts=> {
        GetDetails(arts)})
}
fetchData( "http://localhost:3000/art")

function GetDetails(arts){
    for (let art of arts){
       console.log(displayArt(art))
    }  
}
function displayArt(detail){
    const showArt= document.querySelector("#artisty")
    let card=document.createElement("div")
    let img= document.createElement("img")
    img.setAttribute("src", detail.image)
    card.appendChild(img)
    showArt.appendChild(card)
}