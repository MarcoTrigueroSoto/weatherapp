import convert from 'convert-units';    

import {
    SUNNY,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE, 
    
 } from './../constants/weathers';

const   getWeatherState = weather => {
    const {id} = weather;    
    
    if( id < 300){
        return THUNDER
    }
    else if( id < 400){
        return DRIZZLE;
    }
    else if( id < 600){
        return RAIN;
    }
    else if(id < 700){
        return SNOW;
    }
    else if( id === 800){
        return SUNNY;
    }
    else {
        return CLOUD;
    }
};

const   getTemp = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(0);
         
    }    
     
const   transformWeather = WeatherData =>{
        const {humidity,temp} = WeatherData.main;
        const {speed} = WeatherData.wind;
        const weatherState = getWeatherState(WeatherData.weather[0]);
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