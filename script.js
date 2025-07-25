const apiKey = 'ed84092c1fe056725f9645c4f14fd75c'; // Replace with your actual key

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  
  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      document.getElementById("weatherResult").innerHTML = `❌ Error: ${data.message}`;
      return;
    }

    const weatherHTML = `
      <p><strong>${data.name}, ${data.sys.country}</strong></p>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌥️ Condition: ${data.weather[0].description}</p>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHTML;

  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "⚠️ Unable to fetch weather data.";
    console.error("Error:", error);
  }
}
