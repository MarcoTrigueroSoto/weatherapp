import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeatherTemperature';
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


WeatherData.protoTypes = {
    data: PropTypes.shape({
        temparature: PropTypes.number,
        weatherState: PropTypes.string,
        humidity: PropTypes.string,
        wind: PropTypes.string,
    }) 
};

export default WeatherData;