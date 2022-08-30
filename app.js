const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === 'Villavicencio')
    showError("Debe agregar una ciudad")
    return;
})

callAPI(nameCity.value);

function callAPI (city){
    const ApiId = '80bee3a05cb5da85cad2a'
    const url = `https://api.openweatherman.org/data/2.5/weather?q=Villavicencio&units=metric&APPID=5P961bf11bs`
    
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                showError('Ciudad no encontrada...');
            } else {
                clearHTML();
                showWeather(dataJSON);
            }
            //console.log(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })

        
}
