let img = document.querySelectorAll('img');
for(var i = 1; i <img.length;++i){
    img[i].addEventListener('click',asd)
}
function asd(event){
    let im = document.querySelector('img');
    let image = event.currentTarget.getAttribute('src');
    im.src = image;
    
}