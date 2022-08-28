// const parentDiv = document.querySelector("#tempC")
// // const newPara = document.createElement("p")
// const t = document.createTextNode("Hello World!");
// // newPara.appendChild(t);
// parentDiv.appendChild(t);


// const newPara = document.createElement("p")
// newPara.appendChild(document.createTextNode("Hello World!"));
// const parentDiv = document.querySelector("#tempC").appendChild(newPara)
// parentDiv.appendChild(newPara);

const getWeather = (e) => {
    e.preventDefault();

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

            // const newPara = document.createElement("p")
            // newPara.appendChild(t);
            document.querySelector("#tempC").appendChild(document.createTextNode(`${response.data.current.temp_c}°C`))
            
            const parentDiv2 = document.querySelector('#parentDiv2')
            const locationDiv = document.createElement('div')
            locationDiv.appendChild(document.createTextNode(`${response.data.location.name} , ${response.data.location.region}, ${response.data.location.country}`))
            parentDiv2.appendChild(locationDiv)
            const conditionDiv = document.createElement('div')
            conditionDiv.appendChild(document.createTextNode(`${response.data.current.condition.text}`))
            parentDiv2.appendChild(conditionDiv)
            // newDiv.setAttribute("id", "city_name");

            //created left and right div
            const parentDiv3 = document.querySelector('#details')
            const leftDiv = document.createElement('div')
            parentDiv3.appendChild(leftDiv)
            leftDiv.setAttribute("id", "left");
            const rightDiv = document.createElement('div')
            parentDiv3.appendChild(rightDiv)
            rightDiv.setAttribute("id", "right");
            
            //putting divs and there values in left div 
            const tempF = document.createElement('div')
            tempF.appendChild(document.createTextNode(`Fahrenheit : ${response.data.current.temp_f}°F`))
            leftDiv.appendChild(tempF)
            const feels_like = document.createElement('div')
            feels_like.appendChild(document.createTextNode(`Feels Like: ${response.data.current.feelslike_c}°C`))
            leftDiv.appendChild(feels_like)
            const humidity = document.createElement('div')
            humidity.appendChild(document.createTextNode(`Humidity: ${response.data.current.humidity}%`))
            leftDiv.appendChild(humidity)

            //putting divs and there values in right div 
            const wind_speed = document.createElement('div')
            wind_speed.appendChild(document.createTextNode(`Wind Speed: ${response.data.current.wind_kph}KP/H`))
            rightDiv.appendChild(wind_speed)
            const visibility = document.createElement('div')
            visibility.appendChild(document.createTextNode(`Visibility : ${response.data.current.vis_km} KM`))
            rightDiv.appendChild(visibility)
          
          
            // const wind_speed = document.createElement('div')
            // wind_speed.appendChild(document.createTextNode(`Wind Speed: ${response.data.current.wind_kph}KP/H`))
            // rightDiv.appendChild(wind_speed)
            
             // document.querySelector("#visibility").appendChild(document.createTextNode(`Visibility : ${response.data.current.vis_km} KM`))

            // document.querySelector("#id").appendChild(document.createTextNode())
            // document.querySelector("#ID").innerText = `${response.data.current.condition.text}`;
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