import React, {Component}  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import convert from 'convert-units';
import {
   SUNNY,
    RAINY,
   
} from './../../constants/weathers';

import './styles.css';

const location = "Heredia, CR";
const api_key ="9615f4b4ea56d013a90f49128a0e289d";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const data = {
    temparature: 5,
    weatherState: RAINY,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state= {
            city: "Costa Rica",
            data: data,
        }
}
    getWeatherState = WeatherData => {
        return SUNNY;
    }

    getTemp = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(1);
    
    }
    

    getData = WeatherData =>{
        const {humidity,temp} = WeatherData.main;
        const {speed} = WeatherData.wind;
        const weatherState = this.getWeatherState(WeatherData);
        const temparature = this.getTemp(temp);  
        const data = {
            humidity,
            temparature,
            weatherState,
            wind: `${speed} m/s`,

        }
        return data;
    }


    handelUpdateClick = () => {
        fetch(api_weather).then(resolve => {
    
            return resolve.json();
        }).then(data => {
           const new_weatherData = this.getData(data);
           console.log(new_weatherData);
           debugger;
           this.setState({
               data: new_weatherData
           });
         
        })
       
      
    }

    
    render(){
        const {city, data} = this.state;

        return (<div className="weatherLocationContent">
    
        <h3>Weather Location</h3>
        <Location city={city}/>
        <WeatherData data={data}/>
        
        
        <button onClick ={this.handelUpdateClick}>Mostrar</button>

        <h3>Marco Triguero Soto</h3>
        <h3>Universidad Nacional de Costa Rica</h3>
        <h3>Portafolio Profesional</h3>    
     
    </div>);
    }

};

export default WeatherLocation;