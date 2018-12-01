import React from 'react';
import WeatherIcons from 'react-weathericons';
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
} from './../constants/weathers';

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
    if (icon)
        return <WeatherIcons name={icon} size="2x" />;
    else    
        return <WeatherIcons name={"day-sunny"} size="2x" />;

}

const WeatherTemparature = ({temparature, weatherState}) =>
(
    <div>
       { getWeatherIcon(weatherState) }
        <h2><span>{`${temparature}`}</span></h2>
    </div>
);

export default WeatherTemparature;
