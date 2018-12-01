import React from 'react';
import WeatherIcons from 'react-weathericons';


const getStateIcon = {
    sunny: "day-sunny",
    light_wind: "day-light-wind",
    rainy: "sleet",
    fog: "day-fog"
}

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
