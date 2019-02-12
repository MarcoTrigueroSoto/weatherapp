import convert from 'convert-units';    

import {
    SUNNY,
    RAINY,
    CLOUD,
    LIGHT_WIND,
    RAIN,
    FOG,
    SNOW,
    THUNDER,
    DRIZZLE, 
    
 } from './../constants/weathers';

const   getWeatherState = WeatherData => {
        return SUNNY;
    }

const   getTemp = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(1);
         
    }    
         
         
const   transformWeather = WeatherData =>{
        const {humidity,temp} = WeatherData.main;
        const {speed} = WeatherData.wind;
        const weatherState = getWeatherState(WeatherData.);
        const temparature = getTemp(temp);  
        const data = {
            humidity,
            temparature,
            weatherState,
            wind: `${speed} m/s`,

        }
        return data;
    }


export default transformWeather;