import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeatherTemperature';
import {
    CLOUDY,
    SUNNY,
    RAINY,
    SNOW, 
    WINDY,
    RAIN,
    FOG,
    LIGHT_WIND,
} from './../../../constants/weathers';
import './styles.css';


const WeatherData = () => (
    <div class="weatherDataContent">
        <h2>Weather Data</h2>
            <WeatherTemparature temparature = {22} 
             weatherState={RAIN}/>
            <WeatherExtraInfo humidity={80} wind={"20km"}/>

    </div>

);

export default WeatherData;