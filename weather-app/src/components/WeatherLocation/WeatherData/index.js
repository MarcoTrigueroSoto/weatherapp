import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparature from './WeatherTemperature';
import './styles.css';


const WeatherData = ({ data: {temparature, weatherState, humidity, wind } }) => (
      
    <div className ="weatherDataContent">
            <h2>Clima</h2>
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
        temparature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }) 
};

export default WeatherData;