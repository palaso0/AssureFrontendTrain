async function temperature(lat, lon) {
    document.getElementById("spinner").classList.remove('hidden');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lang=es&lat=${lat}&lon=${lon}&appid=cbf63ad31ee6c121fc25552271ff0b20&units=metric`);
    const data = await response.json();

    document.getElementById("spinner").classList.add('hidden');

    let degrees = document.getElementById('degrees');
    degrees.innerHTML = data.main.temp

    let name = document.getElementById('name');
    name.innerHTML = data.name;

    let day = document.getElementById('day');
    day.innerHTML = today();

    if (data.weather[0].description == 'cielo claro') {
        document.getElementById("weather_image").src="img/cielo_claro.jpg";
    } else if (data.weather[0].description == 'nubes dispersas') {
        document.getElementById("weather_image").src="img/nubes_dispersas.jpg";
    } else if (data.weather[0].description == 'muy nuboso') {
        document.getElementById("weather_image").src="img/muy_nuboso.jpg";
    } else {
        document.getElementById("weather_image").src="img/cielo_claro.jpg";
    }

    let weather = document.getElementById('weather');
    weather.innerHTML = data.weather[0].description;

    let wind = document.getElementById('wind');
    wind.innerHTML = windSpeed(data.wind.speed)

    let humidity = document.getElementById('humidity');
    humidity.innerHTML = data.main.humidity
}

function today() {
    let now = new Date();

    const timeOfTheDay = fecha => [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
    ][new Date(fecha).getDay()];

    if (now.getMinutes() < 10) {
        return `${timeOfTheDay(now)} ${now.getHours()}:0${now.getMinutes()}`
    }
    return `${timeOfTheDay(now)} ${now.getHours()}:${now.getMinutes()}`

}

function changeToFahrenheit() {
    let celcius = document.getElementById('degrees')
    let fahrenheit = (celcius.innerHTML * 9 / 5) + 32
    celcius.innerHTML = Number((fahrenheit).toFixed(2));
    document.getElementById("celcius").classList.remove('font-semibold');
    document.getElementById("celcius").classList.remove('text-gray-900');
    document.getElementById("celcius").classList.add('text-gray-500');
    document.getElementById("fahrenheit").classList.remove('text-gray-500');
    document.getElementById("fahrenheit").classList.add('font-semibold');
    document.getElementById("fahrenheit").classList.add('text-gray-900');
}

function changeToCelcius() {
    let fahrenheit = document.getElementById('degrees')
    let celcius = (fahrenheit.innerHTML - 32) * 5 / 9
    fahrenheit.innerHTML = Number((celcius).toFixed(2));
    document.getElementById("fahrenheit").classList.remove('font-semibold');
    document.getElementById("fahrenheit").classList.remove('text-gray-900');
    document.getElementById("fahrenheit").classList.add('text-gray-500');
    document.getElementById("celcius").classList.remove('text-gray-500');
    document.getElementById("celcius").classList.add('font-semibold');
    document.getElementById("celcius").classList.add('text-gray-900');
}

function windSpeed(wind) {
    return Number((wind * 3600 / 1000).toFixed(2))
}