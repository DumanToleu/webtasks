let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Zhezkazgan","Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
let country = document.querySelector('#countries');
let cities = document.querySelector('#cities');

for (let i = 0; i<countries.length; i++){
    let option = document.createElement('option');
    option.textContent = countries[i];
    country.appendChild(option);
}
country.addEventListener('change', function(e){
    let SelectCountry = e.currentTarget.value;
    let options = cities.querySelectorAll('option');
    for(let i = 0; i <options.length;i++){
        options[i].remove();
    }
    for(let i = 0;i<cities_by_country[SelectCountry].length;i++){
        let option = document.createElement('option');
        option.textContent = cities_by_country[SelectCountry][i];
        cities.appendChild(option);
    }
})