var load = document.querySelectorAll('button')
var loading = document.getElementById("loading")
var cards = document.getElementById("cards") 

load[0].addEventListener("click",function(){
loading.style.display = 'inline-block'
        
      
fetch('http://demo4296963.mockable.io/listCars')
.then(response => response.json())
.then(function(json){
loading.style.display="none"
for (var i = 0; i < json.length; i++) {
    var divka = document.createElement("div")
    divka.className="card"


    var p = document.createElement("p")
    p.innerHTML=json[i].maker+" "+ json[i].model
    p.className="title"

    var span = document.createElement("p")
    span.innerHTML=json[i]["price"]
    span.className="price"


    divka.append(p,span)
    cards.appendChild(divka)

    load.innerHTML="items are loaded"

};
})
.catch(err => {
loading.style.display="none"
load[0].innerHTML="some error occured"

})})
let sortByMaker = document.getElementById('sortByMaker');
let sortByPrice = document.getElementById('sortByPrice');

load[1].addEventListener("click",function(){
    fetch('http://demo4296963.mockable.io/listCars')
    .then(response => response.json())
    .then(function(json){
    json.sort(function(a, b){
    if(a.maker < b.maker) return -1;
    if(a.maker > b.maker) return 1;
    return 0});
    cards.innerHTML = "";
    for (var i = 0; i < json.length; i++) {
    var divka = document.createElement("div")
    divka.className="card"


    var p = document.createElement("p")
    p.innerHTML=json[i].maker+" "+ json[i].model
    p.className="title"

    var span = document.createElement("p")
    span.innerHTML=json[i]["price"]
    span.className="price"


    divka.append(p,span)
    cards.appendChild(divka)

    load.innerHTML="items are loaded"

};
})});
load[2].addEventListener("click",function(){
fetch('http://demo4296963.mockable.io/listCars')
.then(response => response.json())
.then(function(json){
    json.sort(function(a, b){
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
        return 0;
    });
    cards.innerHTML = "";
    for (var i = 0; i < json.length; i++) {
    var divka = document.createElement("div")
    divka.className="card"


    var p = document.createElement("p")
    p.innerHTML=json[i].maker+" "+ json[i].model
    p.className="title"

    var span = document.createElement("p")
    span.innerHTML=json[i]["price"]
    span.className="price"


    divka.append(p,span)
    cards.appendChild(divka)

    load.innerHTML="items are loaded"

};
})})