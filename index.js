const option= document.getElementById("categories")
option.addEventListener("mouseover", handlehover)
function handlehover (event){

}
function getImageData(url){
    fetch(url)
    .then(res=>res.json())
    .then(data => GetData(data))
}
getImageData( "http://localhost:3000/art")
function GetData( art){
    

}