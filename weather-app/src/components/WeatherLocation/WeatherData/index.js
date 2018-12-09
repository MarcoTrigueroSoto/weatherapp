import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeatherTemperature';
import {
    CLOUDY,
    SUNNY,
    RAINY,
    SNOW, 
    WINDY,
    FOG,
    LIGHT_WIND,
    RAIN,
} from './../../../constants/weathers';


import './styles.css';


const WeatherData = ({ data: {temparature, weatherState, humidity, wind } }) => (
      
    <div className ="weatherDataContent">
            <h2>Weather Data</h2>
            <WeatherTemparature 
                temparature = {temparature} 
                weatherState={weatherState}/>
            <WeatherExtraInfo 
                            
                humidity={humidity} 
                wind={wind}/>
    </div>
);

export default WeatherData;