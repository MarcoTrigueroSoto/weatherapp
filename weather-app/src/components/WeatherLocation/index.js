import React, {Component}  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
   SUNNY,
    RAINY,
   
} from './../../constants/weathers';

import './styles.css';


const data = {
    temparature: 5,
    weatherState: RAINY,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temparature: 20,
    weatherState: SUNNY,
    humidity: 13,
    wind: '14 m/s',
}

class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state= {
            city: "Costa Rica",
            data: data,
        }
}


    handelUpdateClick = () => {
        console.log("Actualizado");
        this.setState({
            city: 'Alemania',
            data: data2,
        });
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