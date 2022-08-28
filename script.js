
const myFunction = () => {

    const cityy = document.querySelector("#city").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${cityy}`)
        .then(function (response) {
            // handle success
            // const data = response.data;

            // console.log(data);

            let icon = response.data.current.condition.icon;
            icon.replace("/file// ");
            console.log(icon);
            document.querySelector("#weather_icon").src = icon;

            document.querySelector("#tempC").innerText = `${response.data.current.temp_c}°C`;
            document.querySelector("#tempF").innerText = `Fahrenheit : ${response.data.current.temp_f}°F`;
            document.querySelector("#city_name").innerText = `${response.data.location.name} , ${response.data.location.region}, ${response.data.location.country}`;
            document.querySelector("#weather_condition").innerText = `${response.data.current.condition.text}`;
            document.querySelector("#feels_like").innerText = `Feels Like: ${response.data.current.feelslike_c}°C`;
            document.querySelector("#wind_speed").innerText = `Wind Speed: ${response.data.current.wind_kph}KP/H`;
            document.querySelector("#humidity").innerText = `Humidity: ${response.data.current.humidity}%`;
            document.querySelector("#visibility").innerText = `Visibility : ${response.data.current.vis_km} KM`;
            document.querySelector("#weather_condition").innerText = `${response.data.current.condition.text}`;
            document.querySelector("#weather_condition").innerText = `${response.data.current.condition.text}`;
            document.querySelector("#weather_condition").innerText = `${response.data.current.condition.text}`;
        })


}

// let autocomplete;
// function initAutocomplete() {
//     console.log("autocomplete runnign");
//     autocomplete = new google.maps.places.Autocomplete(
//         document.querySelector("#city"),
//         {
//             types: ["geocode"],
//             // bounds: defaultBounds,
//             // componentRestrictions: { country: "us" },
//             // fields: ["address_components", "geometry", "icon", "name"],
//             // strictBounds: false,
//             // types:["establishment"]
//             // componentRestrictions:{'country':['AU']},
//             // fields:['geometry','name']
//         });
// }


// getWeatherData();

    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//b8479188ba00221d2a5d75984a3bec57 key

//Google api key [AIzaSyD95UmIs7F-rZFEkF2ErNAmyaphBz3KZBo]