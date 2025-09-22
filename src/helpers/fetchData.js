import { useState } from "react";
import weatherIcons from "./weatherIcons";

export const fetchData = async (query) => {
  const key = "0f6ce5eee14b40b994545816241504"; //api key
  const daysFC = 3; // Dias de pronóstico
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=id:${encodeURI(
    query
  )}&days=${daysFC}`; //api url

  const resp = await fetch(url);
  const { current, location, forecast } = await resp.json();

  const hourForecast = forecast.forecastday[0].hour.map((fc) => {
    return {
      time: fc.time,
      temp_c: Math.round(parseFloat(fc.temp_c)),
      is_day: fc.is_day,
      code: fc.condition.code,
    };
  });

  const getDaysForecasts = (days) => {
    const forecasts = [];

    for (let i = 0; i < days; i++) {
      const fc = {
        date: forecast.forecastday[i].date,
        maxtemp_c: Math.round(
          parseFloat(forecast.forecastday[i].day.maxtemp_c)
        ),
        mintemp_c: Math.round(
          parseFloat(forecast.forecastday[i].day.mintemp_c)
        ),
        code: forecast.forecastday[i].day.condition.code,
        condition: forecast.forecastday[i].day.condition.text,
      };
      forecasts.push(fc);
    }
    return forecasts;
  };

  // console.log(getDaysForecasts(3));

  const data = {
    main: {
      name: location.name,
      region: location.region,
      country: location.country,
      temp_c: Math.round(parseFloat(current.temp_c)),
      icon: weatherIcons[current.condition.code][
        current.is_day ? "day" : "night"
      ],
      is_day: current.is_day,
    },
    astro: {
      sunrise: forecast.forecastday[0].astro.sunrise,
      sunset: forecast.forecastday[0].astro.sunset,
      moonrise: forecast.forecastday[0].astro.moonrise,
      moonset: forecast.forecastday[0].astro.moonset,
    },
    air: {
      feelslike_c: current.feelslike_c,
      uv: current.uv,
      wind_kph: current.wind_kph,
      precip_mm: current.precip_mm,
    },
    hour: [
      hourForecast[6], //6Am
      hourForecast[9],
      hourForecast[12],
      hourForecast[15],
      hourForecast[18],
      hourForecast[21], //9pm
    ],
    days: getDaysForecasts(daysFC), //Obtener pronóstico de n días
  };

  return data;
};
