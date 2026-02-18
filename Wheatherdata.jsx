import React, { useState } from 'react';


export default function Wheatherdata({ city, setCity, onSearch }) {
    let [weather, setWeather] = useState(null);

    const fetchWeather = async () => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"3181f161f7b732858b5a039eb52c34c8"}&units=metric`;

        const response = await fetch(url);
        let data = await response.json();
        console.log(data);

        setWeather(data);
    };
    if (onSearch) {
        onSearch.current = fetchWeather;
    }
  /*  const getCountryName = (code) => {
        return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
    };
    const countryName = getCountryName(weather.sys.country);
    console.log(countryName);*/
    const formatTime = (time) => {
        return time.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };
const getIndiaTime = () => {
  return new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
};

    return (
        <>

            <div className='bg-white/50 max-w-sm mx-auto mt-3 p-6 rounded-lg shadow-lg'>
                <div >
                    {weather && weather.main && weather.weather ? (
                        <>
                            <div className='font-extrabold text-2xl pb-1 text-center'>Weather Data</div>


                            <p className="text-lg">
                                <span className="font-semibold">Temperature:</span>{" "}
                                {weather.main.temp}°C
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold">Humidity:</span>{" "}
                                {weather.main.humidity}%
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Wind speed :</span>{" "}
                                {weather.wind.speed}
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold">Condition:</span>{" "}
                                {weather.weather[0].description}
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Sunrise:</span>{" "}
                                {formatTime(new Date(weather.sys.sunrise * 1000))}

                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Sunset:</span>{" "}
                                {formatTime(new Date(weather.sys.sunset * 1000))}
                            </p>
                            <p className="text-lg flex items-center -mt-5">
                                <span className="font-semibold">Sky Image:</span>{" "}
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt="weather icon"
                                    className="w-20 h-20"
                                />
                            </p>
                            <p className='text-center text-xl font-semibold text-orange-700'>India Time: {getIndiaTime()}</p>
                        </>
                    ) : (
                        <p className="text-lg text-gray-600">
                            Search a city and click button to see weather.
                        </p>
                    )}
                </div>
            </div></>

    )
}
