console.log(`shehzad`)

// console.log(o1.list[4].weather[0].main)
// console.log(o1.list[4].weather[0].description)

// console.log(o1.list[0].main.temp)
// console.log(o1.list[0].main.feels_like)
// console.log(o1.list[0].main.temp_min)
// console.log(o1.list[0].main.temp_max)
// console.log(o1.list[0].main.humidity)


// console.log(o1.list[4].weather[0].id)
// console.log(o1.list[0].main.temp)
// console.log(o1.list[0].main.temp)
// console.log(o1.list[0].main.temp)
// console.log(o1.list[0].main.temp)
// console.log(o1.list[0].main.temp)

const o1 = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1661731200,
            "main": {
                "temp": 299.82,
                "feels_like": 302.33,
                "temp_min": 299.25,
                "temp_max": 299.82,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1002,
                "humidity": 82,
                "temp_kf": 0.57
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 4.92,
                "deg": 262,
                "gust": 6.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-29 00:00:00"
        },
        {
            "dt": 1661742000,
            "main": {
                "temp": 299.79,
                "feels_like": 299.79,
                "temp_min": 299.63,
                "temp_max": 299.79,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1004,
                "humidity": 78,
                "temp_kf": 0.16
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 4.39,
                "deg": 255,
                "gust": 5.07
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-29 03:00:00"
        },
        {
            "dt": 1661752800,
            "main": {
                "temp": 301.11,
                "feels_like": 303.74,
                "temp_min": 301.11,
                "temp_max": 301.11,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1005,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 5.27,
                "deg": 257,
                "gust": 5.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-29 06:00:00"
        },
        {
            "dt": 1661763600,
            "main": {
                "temp": 302.69,
                "feels_like": 305.87,
                "temp_min": 302.69,
                "temp_max": 302.69,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 5.28,
                "deg": 253,
                "gust": 4.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-29 09:00:00"
        },
        {
            "dt": 1661774400,
            "main": {
                "temp": 302.14,
                "feels_like": 305.32,
                "temp_min": 302.14,
                "temp_max": 302.14,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 805,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 4.89,
                "deg": 251,
                "gust": 4.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-29 12:00:00"
        },
        {
            "dt": 1661785200,
            "main": {
                "temp": 300.82,
                "feels_like": 303.67,
                "temp_min": 300.82,
                "temp_max": 300.82,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 806,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 4.59,
                "deg": 237,
                "gust": 4.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-29 15:00:00"
        },
        {
            "dt": 1661796000,
            "main": {
                "temp": 300.12,
                "feels_like": 302.64,
                "temp_min": 300.12,
                "temp_max": 300.12,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1004,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 3.71,
                "deg": 248,
                "gust": 4.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-29 18:00:00"
        },
        {
            "dt": 1661806800,
            "main": {
                "temp": 299.51,
                "feels_like": 299.51,
                "temp_min": 299.51,
                "temp_max": 299.51,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 4.11,
                "deg": 265,
                "gust": 4.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-29 21:00:00"
        },
        {
            "dt": 1661817600,
            "main": {
                "temp": 299.11,
                "feels_like": 299.11,
                "temp_min": 299.11,
                "temp_max": 299.11,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1004,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 25
            },
            "wind": {
                "speed": 4.31,
                "deg": 271,
                "gust": 5.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-30 00:00:00"
        },
        {
            "dt": 1661828400,
            "main": {
                "temp": 299.77,
                "feels_like": 299.77,
                "temp_min": 299.77,
                "temp_max": 299.77,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1005,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 61
            },
            "wind": {
                "speed": 4.21,
                "deg": 267,
                "gust": 4.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-30 03:00:00"
        },
        {
            "dt": 1661839200,
            "main": {
                "temp": 301.94,
                "feels_like": 305.78,
                "temp_min": 301.94,
                "temp_max": 301.94,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1006,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 4.37,
                "deg": 264,
                "gust": 3.79
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-30 06:00:00"
        },
        {
            "dt": 1661850000,
            "main": {
                "temp": 302.65,
                "feels_like": 306.79,
                "temp_min": 302.65,
                "temp_max": 302.65,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1004,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 5.38,
                "deg": 254,
                "gust": 4.47
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-30 09:00:00"
        },
        {
            "dt": 1661860800,
            "main": {
                "temp": 302.03,
                "feels_like": 305.8,
                "temp_min": 302.03,
                "temp_max": 302.03,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 5.57,
                "deg": 250,
                "gust": 4.91
            },
            "visibility": 10000,
            "pop": 0.21,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-30 12:00:00"
        },
        {
            "dt": 1661871600,
            "main": {
                "temp": 300.5,
                "feels_like": 303.46,
                "temp_min": 300.5,
                "temp_max": 300.5,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1004,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 30
            },
            "wind": {
                "speed": 4.52,
                "deg": 244,
                "gust": 4.57
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-30 15:00:00"
        },
        {
            "dt": 1661882400,
            "main": {
                "temp": 299.89,
                "feels_like": 302.32,
                "temp_min": 299.89,
                "temp_max": 299.89,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1005,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 23
            },
            "wind": {
                "speed": 3.81,
                "deg": 258,
                "gust": 4.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-30 18:00:00"
        },
        {
            "dt": 1661893200,
            "main": {
                "temp": 299.29,
                "feels_like": 299.29,
                "temp_min": 299.29,
                "temp_max": 299.29,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 30
            },
            "wind": {
                "speed": 4.58,
                "deg": 273,
                "gust": 5.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-30 21:00:00"
        },
        {
            "dt": 1661904000,
            "main": {
                "temp": 299.31,
                "feels_like": 299.31,
                "temp_min": 299.31,
                "temp_max": 299.31,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1003,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 4.41,
                "deg": 279,
                "gust": 5.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-31 00:00:00"
        },
        {
            "dt": 1661914800,
            "main": {
                "temp": 299.87,
                "feels_like": 302.36,
                "temp_min": 299.87,
                "temp_max": 299.87,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1004,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 4.32,
                "deg": 272,
                "gust": 4.83
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-31 03:00:00"
        },
        {
            "dt": 1661925600,
            "main": {
                "temp": 301.99,
                "feels_like": 305.53,
                "temp_min": 301.99,
                "temp_max": 301.99,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1004,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 5.45,
                "deg": 257,
                "gust": 5.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-31 06:00:00"
        },
        {
            "dt": 1661936400,
            "main": {
                "temp": 302.83,
                "feels_like": 306.56,
                "temp_min": 302.83,
                "temp_max": 302.83,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 47
            },
            "wind": {
                "speed": 6.32,
                "deg": 254,
                "gust": 5.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-31 09:00:00"
        },
        {
            "dt": 1661947200,
            "main": {
                "temp": 302,
                "feels_like": 305.38,
                "temp_min": 302,
                "temp_max": 302,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1002,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 6.12,
                "deg": 259,
                "gust": 6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-08-31 12:00:00"
        },
        {
            "dt": 1661958000,
            "main": {
                "temp": 300.5,
                "feels_like": 303.35,
                "temp_min": 300.5,
                "temp_max": 300.5,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1003,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 5.48,
                "deg": 254,
                "gust": 6.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-31 15:00:00"
        },
        {
            "dt": 1661968800,
            "main": {
                "temp": 299.77,
                "feels_like": 299.77,
                "temp_min": 299.77,
                "temp_max": 299.77,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1004,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 5.55,
                "deg": 268,
                "gust": 6.54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-31 18:00:00"
        },
        {
            "dt": 1661979600,
            "main": {
                "temp": 299.2,
                "feels_like": 299.2,
                "temp_min": 299.2,
                "temp_max": 299.2,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 6.12,
                "deg": 271,
                "gust": 7.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-08-31 21:00:00"
        },
        {
            "dt": 1661990400,
            "main": {
                "temp": 299.18,
                "feels_like": 299.18,
                "temp_min": 299.18,
                "temp_max": 299.18,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 5.99,
                "deg": 263,
                "gust": 7.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-01 00:00:00"
        },
        {
            "dt": 1662001200,
            "main": {
                "temp": 299.93,
                "feels_like": 302.09,
                "temp_min": 299.93,
                "temp_max": 299.93,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 6.7,
                "deg": 258,
                "gust": 7.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-01 03:00:00"
        },
        {
            "dt": 1662012000,
            "main": {
                "temp": 301.86,
                "feels_like": 304.92,
                "temp_min": 301.86,
                "temp_max": 301.86,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 47
            },
            "wind": {
                "speed": 7.47,
                "deg": 256,
                "gust": 7.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-01 06:00:00"
        },
        {
            "dt": 1662022800,
            "main": {
                "temp": 302.63,
                "feels_like": 305.94,
                "temp_min": 302.63,
                "temp_max": 302.63,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1001,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 7.65,
                "deg": 259,
                "gust": 7.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-01 09:00:00"
        },
        {
            "dt": 1662033600,
            "main": {
                "temp": 301.72,
                "feels_like": 304.64,
                "temp_min": 301.72,
                "temp_max": 301.72,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1001,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 6.83,
                "deg": 253,
                "gust": 6.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-01 12:00:00"
        },
        {
            "dt": 1662044400,
            "main": {
                "temp": 300.16,
                "feels_like": 302.63,
                "temp_min": 300.16,
                "temp_max": 300.16,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 21
            },
            "wind": {
                "speed": 6.07,
                "deg": 246,
                "gust": 6.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-01 15:00:00"
        },
        {
            "dt": 1662055200,
            "main": {
                "temp": 299.61,
                "feels_like": 299.61,
                "temp_min": 299.61,
                "temp_max": 299.61,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 6.04,
                "deg": 258,
                "gust": 6.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-01 18:00:00"
        },
        {
            "dt": 1662066000,
            "main": {
                "temp": 299.4,
                "feels_like": 299.4,
                "temp_min": 299.4,
                "temp_max": 299.4,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1001,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 6.03,
                "deg": 264,
                "gust": 7.36
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-01 21:00:00"
        },
        {
            "dt": 1662076800,
            "main": {
                "temp": 299.28,
                "feels_like": 299.28,
                "temp_min": 299.28,
                "temp_max": 299.28,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1001,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 75
            },
            "wind": {
                "speed": 5.7,
                "deg": 263,
                "gust": 7.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-02 00:00:00"
        },
        {
            "dt": 1662087600,
            "main": {
                "temp": 299.85,
                "feels_like": 301.94,
                "temp_min": 299.85,
                "temp_max": 299.85,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1003,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 6.01,
                "deg": 262,
                "gust": 6.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-02 03:00:00"
        },
        {
            "dt": 1662098400,
            "main": {
                "temp": 301.95,
                "feels_like": 305.1,
                "temp_min": 301.95,
                "temp_max": 301.95,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1004,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 6.14,
                "deg": 257,
                "gust": 6.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-02 06:00:00"
        },
        {
            "dt": 1662109200,
            "main": {
                "temp": 302.87,
                "feels_like": 306.23,
                "temp_min": 302.87,
                "temp_max": 302.87,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 6.2,
                "deg": 250,
                "gust": 5.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-02 09:00:00"
        },
        {
            "dt": 1662120000,
            "main": {
                "temp": 301.83,
                "feels_like": 305.19,
                "temp_min": 301.83,
                "temp_max": 301.83,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1001,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 5.72,
                "deg": 250,
                "gust": 5.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2022-09-02 12:00:00"
        },
        {
            "dt": 1662130800,
            "main": {
                "temp": 300.42,
                "feels_like": 303.18,
                "temp_min": 300.42,
                "temp_max": 300.42,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1002,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.91,
                "deg": 251,
                "gust": 5.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-02 15:00:00"
        },
        {
            "dt": 1662141600,
            "main": {
                "temp": 299.81,
                "feels_like": 299.81,
                "temp_min": 299.81,
                "temp_max": 299.81,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1003,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 5.53,
                "deg": 254,
                "gust": 5.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-02 18:00:00"
        },
        {
            "dt": 1662152400,
            "main": {
                "temp": 299.45,
                "feels_like": 299.45,
                "temp_min": 299.45,
                "temp_max": 299.45,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1001,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                },
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "06n"
                }
            ],
            "clouds": {
                "all": 57
            },
            "wind": {
                "speed": 5.52,
                "deg": 266,
                "gust": 6.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2022-09-02 21:00:00"
        }
    ],
    "city": {
        "id": 1174872,
        "name": "Karachi",
        "coord": {
            "lat": 24.9201,
            "lon": 67.0859
        },
        "country": "PK",
        "population": 11624219,
        "timezone": 18000,
        "sunrise": 1661735488,
        "sunset": 1661781263
    }
}
// console.log(o1)

// console.log(o1.list[0].main.temp)


