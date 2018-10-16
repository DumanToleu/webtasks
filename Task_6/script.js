let button = document.querySelectorAll('button');
for(let v = 0; v<button.length;++v){
    button[v].addEventListener('click',function(){
        button[v].parentNode.childNodes[1].style.textDecoration = 'line-through';
    });
}