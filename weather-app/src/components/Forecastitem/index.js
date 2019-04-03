import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const data = {
    temp: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',  
}

const ForecastItem = ({weekDay, hour}) =>(
    <div>
    <div>{weekDay} hora : {hour}</div>
    <WeatherData data={data}></WeatherData>  
    </div>
);

ForecastItem.propTypes ={
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired
}

export default ForecastItem;