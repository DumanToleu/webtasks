let button = document.querySelector("#addStudent");
let table = document.querySelector('#students');
let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let faculty = document.querySelector('#faculty');
button.addEventListener("click",asd);
function asd(){
    if (name.value.trim() == ""){
        name.classList.add('error');
    }
    else{
        if(surname.value.trim() == ''){
         surname.classList.add('error')
        }
        else{
            table.innerHTML += "<tr><td>"+name.value+"</td><td>"+surname.value+"</td><td><strong>"+faculty.value+"</strong></td></tr>";
            name.classList.remove('error');
            surname.classList.remove('error');
        }
    }
}