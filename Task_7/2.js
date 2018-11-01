var load = document.getElementsByTagName('button')[0]
var loading = document.getElementById("loading")
var cards = document.getElementById("cards") 

load.addEventListener("click",function(){
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
load.innerHTML="some error occured"

})})