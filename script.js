


const apiKey = '0ffe3012ef23db7227166f86c18e4f81'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.name + ', ' + data.sys.country;
            const temperature = Math.round(data.main.temp) + '°C';
            const description = data.weather[0].description;

            document.getElementById('location').innerText = location;
            document.getElementById('temperature').innerText = 'Temperature: ' + temperature;
            document.getElementById('description').innerText = 'Description: ' + description;
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
            console.error('Error:', error);
        });
}