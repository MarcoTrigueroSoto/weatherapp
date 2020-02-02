import transformForecast from './../Services/transformForeCast';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const  api_key ="9615f4b4ea56d013a90f49128a0e289d";
const url = "https://api.openweathermap.org/data/2.5/forecast";


export const setSeletedCity = payload => {
    
    return dispatch => {
        
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
        //activa un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        return fetch(url_forecast).then(
            data => (data.json())
            ).then(
                WeatherData => {
                    const forecastData = transformForecast(WeatherData);
                    console.log(forecastData);
                    

                    //modificar el estado con el resultado de la promise.
                    dispatch(setForecastData({city: payload,forecastData}));
                }
            );

    };
};