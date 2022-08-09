async function temperature() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-17.393756912052456&lon=-66.15698241247463&appid=cbf63ad31ee6c121fc25552271ff0b20');
    const data = await response.json();
    console.log(data);

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.openweathermap.org/data/2.5/weather?lat=-17.393756912052456&lon=-66.15698241247463&appid=cbf63ad31ee6c121fc25552271ff0b20", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    let name = document.getElementById('name');
    name.innerHTML = data.name;

    let day = document.getElementById('day');
    let today = new Date();
    day.innerHTML = today.toLocaleString();

    /* let name = document.getElementById('name');
    name.innerHTML = data.name;
 */
    let prob = document.getElementById("prob");
    let humidity = document.getElementById("humidity");
    let wind = document.getElementById("wind");

    humidiy.innerHTML = "Humidity: " + data.main.humidity;
    wind.innerHTML = "Wind: " + data.wind.speed + " Km/h";

    // console.log(JSON.parse(result));


}
