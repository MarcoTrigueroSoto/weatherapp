import React from 'react';
import WeatherIcons from 'react-weathericons';
import ProTypes from 'prop-types';
import {
    SUNNY,
    THUNDER,
    SNOW, 
    RAIN,
    CLOUD,
    DRIZZLE,
} from './../../../constants/weathers';
import './styles.css';

const getStateIcon = {
    [SUNNY]: "day-sunny",
    [SNOW]: "snow",
    [RAIN]: "rain",
    [CLOUD]: "cloud",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-shower",
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
