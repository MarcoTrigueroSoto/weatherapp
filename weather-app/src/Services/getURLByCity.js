import {url_base_weather, api_key} from './../constants/api_weather';

const getURLWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getURLWeatherByCity;