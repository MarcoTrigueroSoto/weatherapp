import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => (
    <div>
    <h3>Weather Location</h3>
    <h3>Marco Triguero Soto</h3>
    <h3>Universidad Nacional de Costa Rica</h3>
    <h3>Portafolio Profesional</h3>
    
    
        <WeatherData/>
        <Location city={"Costa Rica"}/>
        
     
    </div>


);

export default WeatherLocation;