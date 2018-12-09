import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    CLOUDY,
    SUNNY,
    RAINY,
    SNOW, 
    WINDY,
    FOG,
    LIGHT_WIND,
    RAIN,
} from './../../constants/weathers';

import './styles.css';


const data = {
    temparature: 5,
    weatherState: RAINY,
    humidity: 10,
    wind: '10 m/s',
}

const WeatherLocation = () => (
    <div className="weatherLocationContent">
    
        <h3>Weather Location</h3>
        <Location city={"Nueva Zelanda"}/>
        <WeatherData data={data}/>
        
        
        <h3>Marco Triguero Soto</h3>
        <h3>Universidad Nacional de Costa Rica</h3>
        <h3>Portafolio Profesional</h3>    
     
    </div>


);

export default WeatherLocation;