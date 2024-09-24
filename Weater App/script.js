const apiKey='61631a68b42d32c5f8de10c022b1a495';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

function update(weatherData){
    document.querySelector('#city-name').innerText=weatherData.name
    document.querySelector('#temp h1').innerText = weatherData.main.temp+'°C'
    document.querySelector('#main').innerText=weatherData.weather[0].main
    document.querySelector('#description').innerText=weatherData.weather[0].description
    document.querySelector('#humidity').innerText=`${weatherData.main.humidity}%`
    document.querySelector('#wind').innerText = `${weatherData.wind.speed} m/s`

    const icon = document.querySelector('#w-icon')

    let weatherCondition = weatherData.weather[0].main;
    
    if(weatherCondition==='Drizzle'){
        icon.src='img/drizzle.gif'
    }else if(weatherCondition==='Thunderstorm'){
        icon.src='img/thunderstrom.gif'
    }else if(weatherCondition === 'Rain'){
        icon.src='img/rain.gif'
    }else if(weatherCondition === 'Snow'){
        icon.src='img/snow.gif'
    }else if(weatherCondition === 'Clear'){
        icon.src='img/clear.gif'
    }else if(weatherCondition === 'Clouds'){
        icon.src='img/clouds.gif'
    }else{
        icon.src='img/mist.gif'
    }
}

async function checkWeather(city) {
    try{
        const response = await fetch(apiUrl + `&q=${city}` +`&appid=${apiKey}`);
        if(!response.ok){
            if(response.status===404){
                alert('Please Enter Valid City Name.')
                throw new Error('City not found (404)');
            }else{
                alert('An error occurred, try again later.')
                throw new Error(`An error occurred: ${response.status}`);
            }
        }
        var data = await response.json();
        update(data);
    }catch(error){
        console.error('Error:', error.message);
    }
    
}

searchBtn.addEventListener('click', ()=>{
    var searchVal = searchBox.value
    if(searchVal!=''){
        checkWeather(searchVal);
    }else{
        alert('Please enter valid city name.')
    }
})
checkWeather('patna')