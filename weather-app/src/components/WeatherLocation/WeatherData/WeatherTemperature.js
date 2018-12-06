import React from 'react';
import WeatherIcons from 'react-weathericons';
import ProTypes from 'prop-types';
import {
    CLOUDY,
    SUNNY,
    RAINY,
    SNOW, 
    WINDY,
    RAIN,
    FOG,
    LIGHT_WIND,
    CLOUD,
} from './../../../constants/weathers';
import './styles.css';

const getStateIcon = {
    [SUNNY]: "day-sunny",
    [LIGHT_WIND]: "day-light-wind",
    [RAINY]: "sleet",
    [FOG]: "day-fog",
    [SNOW]: "snow",
    [WINDY]:"windy",
    [RAIN]: "rain",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy"
};



const getWeatherIcon = weatherState => {
    const icon = getStateIcon[weatherState];

    const sizeIcon= '2x';
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else    
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>;

}

const WeatherTemparature = ({temparature, weatherState}) =>
(
    <div className="weatherTemparatureContent">
       { getWeatherIcon(weatherState) }

        <span className="temparature">{`${temparature}`}</span>
        <span className="temparatureType">{`C°`}</span>
    
    </div>
);

WeatherTemparature.proTypes = {
    temparature: ProTypes.number,
    weatherState: ProTypes.string,
};


export default WeatherTemparature;
