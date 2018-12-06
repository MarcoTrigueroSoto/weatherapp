import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div className="weatherLocationContent">
    
        <h3>Weather Location</h3>
        <Location city={"Nueva Zelanda"}/>
        <WeatherData/>
        
        
        <h3>Marco Triguero Soto</h3>
        <h3>Universidad Nacional de Costa Rica</h3>
        <h3>Portafolio Profesional</h3>    
     
    </div>


);

export default WeatherLocation;