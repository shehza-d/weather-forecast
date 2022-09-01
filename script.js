// "use strict!"
const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

(() => {
        const dateTimeDiv = document.querySelector('#dateDiv');
        const dateDiv = document.createElement('div')
        const time = document.createElement('div')
        let tim = moment().format("h:mm a");
        // setInterval(() => {
        //         tim = moment().format("h:mm:ss a");
        // }, 1000);
        // console.log(tim)
        dateDiv.appendChild(document.createTextNode(`${moment().format("D MMM YYYY")}`))
        time.appendChild(document.createTextNode(`${tim}`))
        dateTimeDiv.appendChild(dateDiv)
        dateTimeDiv.appendChild(time)
        // console.log(TODAY)
})();

//getting user current location
(() => {
        navigator.geolocation.getCurrentPosition((success) => {
                const { latitude, longitude } = success.coords;
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
                        console.log(data)
                        showWeatherData(data);
                })
        })
})();

const getWeather = (e) => {
        e.preventDefault();

        const CITY = document.querySelector("#city").value;
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`).then((response) => {
                // handle success
                const data = response.data;
                console.log(response.data);
                showWeatherData(data);
        })
}
const showWeatherData = (data) => {
        removeOldData();

        const parentDiv1 = document.querySelector('#main_container')

        const weatherLocation = document.createElement('div')
        weatherLocation.appendChild(document.createTextNode(`Today's Weather of ${data.city.name}`))//${response.data.city.name}
        parentDiv1.appendChild(weatherLocation)
        weatherLocation.setAttribute("class", "city_name");
        const tempC = document.createElement('div')
        tempC.appendChild(document.createTextNode(`${data.list[0].main.temp}°C`))
        parentDiv1.appendChild(tempC)
        tempC.setAttribute("id", "tempC");
        // ${response.data.current.temp_c}
        const icon = document.createElement('img')
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
        parentDiv1.appendChild(icon)



        const parentDiv2 = document.querySelector('#parentDiv2')

        const conditionDiv = document.createElement('div')
        conditionDiv.appendChild(document.createTextNode(`${data.list[0].weather[0].main}`))
        parentDiv2.appendChild(conditionDiv)
        const conditionSpan = document.createElement('span')
        conditionSpan.appendChild(document.createTextNode(`${data.list[0].weather[0].description}`))
        parentDiv2.appendChild(conditionSpan)
        // // newDiv.setAttribute("id", "city_name");
        console.log(`Humidity ${data.list[0].main.humidity} %`)
        console.log(`Pressure ${data.list[0].main.pressure}`)
        console.log(`Sea Level ${data.list[0].main.sea_level}`)
        console.log(`Min Temperature ${data.list[0].main.temp_min}°C`)
        console.log(`Max Temperature ${data.list[0].main.temp_max}°C`)
        console.log(`Visibility ${data.list[0].visibility} M`)
        console.log(`Wind Speed ${data.list[0].wind.speed} KM`)
        console.log(`Wind Direction ${data.list[0].wind.deg} KM`)


        // //created left and right div
        // const parentDiv3 = document.querySelector('#details')
        // const leftDiv = document.createElement('div')
        // parentDiv3.appendChild(leftDiv)
        // leftDiv.setAttribute("id", "left");
        // const rightDiv = document.createElement('div')
        // parentDiv3.appendChild(rightDiv)
        // rightDiv.setAttribute("id", "right");

        // //putting divs and there values in left div 
        // const tempF = document.createElement('div')
        // tempF.appendChild(document.createTextNode(`Fahrenheit : ${data.current.temp_f}°F`))
        // leftDiv.appendChild(tempF)
        // const feels_like = document.createElement('div')
        // feels_like.appendChild(document.createTextNode(`Feels Like: ${data.current.feelslike_c}°C`))
        // leftDiv.appendChild(feels_like)
        // const humidity = document.createElement('div')
        // humidity.appendChild(document.createTextNode(`Humidity: ${data.current.humidity}%`))
        // leftDiv.appendChild(humidity)

        // //putting divs and there values in right div 
        // const wind_speed = document.createElement('div')
        // wind_speed.appendChild(document.createTextNode(`Wind Speed: ${data.current.wind_kph}KP/H`))
        // rightDiv.appendChild(wind_speed)
        // const visibility = document.createElement('div')
        // visibility.appendChild(document.createTextNode(`Visibility : ${data.current.vis_km} KM`))
        // rightDiv.appendChild(visibility)


        console.log(`Population ${data.city.population}`)
        console.log(`Timezone of ${data.city.name} is ${data.city.timezone}`)
        console.log(`${data.city.name}'s Latitude is ${data.city.coord.lat} and Longitude is ${data.city.coord.lon}`)



        // const wind_speed = document.createElement('div')
        // wind_speed.appendChild(document.createTextNode(`Wind Speed: ${response.data.current.wind_kph}KP/H`))
        // rightDiv.appendChild(wind_speed)

        // document.querySelector("#visibility").appendChild(document.createTextNode(`Visibility : ${response.data.current.vis_km} KM`))

        // document.querySelector("#id").appendChild(document.createTextNode())
        // document.querySelector("#ID").innerText = `${response.data.current.condition.text}`;
}


//removing old data from DOM before adding new
const removeOldData = () => {
        console.log(` remove date`)

}




{
        const forecastDiv = document.querySelector('#forecastDiv');
        const myChart = document.createElement('canvas');
        myChart.setAttribute('id', 'myChart');
        // forecastDiv.appendChild(myChart);


        // let myChart = document.querySelector('#myChart').getContext('2d');

        //Global Options
        // Chart.defaults.global.defaultFontFamily = 'Roboto';
        // Chart.defaults.global.defaultFontSize =18;
        // Chart.defaults.global.defaultFontColor =;
        // Chart.defaults.global.default =;

        let weatherChart = new Chart(myChart, {
                type: 'bar', //types we can have bar,horizontal bar, pie, line, doughnut, radar, polarArea.
                data: {
                        labels: ['Weather', 'Temperature', 'karachi', 'lahore', 'islamabad', 'Weather', 'Temperature', 'karachi', 'lahore', 'islamabad'],
                        datasets: [{
                                label: 'TEMPERATURE FORECAST',
                                data: [45, 32, 19, 32, 25, 45, 32, 19, 32, 25],
                                backgroundColor: 'rgba(100, 255, 100, 1)',
                                borderWidth: 3,
                                borderColor: 'blue',
                                hoverBorderWidth: 6,
                                hoverBorderColor: 'rgba(255, 255, 255, 1)',
                        }],
                },
                Options: {
                        title:{
                                display: true,
                                text: 'Weather'
                        }
                }
        });
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

//haroon API     https://api.weatherapi.com/v1/forecast.json?key=d334715e82a4490c903112428220107&q=${city}&days=14
//zaid ki API    ​https://api.weatherapi.com/v1/forecast.json?key=ede7d8e1ad844d5aa2d122013222808&q=${city}&days=14
//API            api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//key            b8479188ba00221d2a5d75984a3bec57
//current        https://api.openweathermap.org/data/2.5/forecast?lat=24.920064&lon=67.0859264&appid=b8479188ba00221d2a5d75984a3bec57
//old            https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${cityy}
//Google api key [AIzaSyD95UmIs7F-rZFEkF2ErNAmyaphBz3KZBo]