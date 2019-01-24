import React, {Component}  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {api_weather} from './../../constants/api_weather';
import transforWeather from './../../Services/transforWeather';
import './styles.css';



class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state= {
            city: "Costa Rica",
            data: null,

        };
        console.log("Constructor");
}
    componentDidMount() {
     console.log("Did Mount");
     this.handelUpdateClick();   
    }

    componentDidUpdate(prevProps, prevState) {
    console.log("Update");    
    }
    
    handelUpdateClick = () => {
        fetch(api_weather).then(resolve => {
    
            return resolve.json();
        }).then(data => {
           const new_weatherData = transforWeather(data);
           console.log(new_weatherData);
           this.setState({
               data: new_weatherData
           });     
        });
    }

    
    render(){
        const {city, data} = this.state;
        console.log("render");
        return (<div className="weatherLocationContent">
    
        <h3>Weather Location</h3>
        <Location city={city}/>
        {data ?
            <WeatherData data={data}/>:
            "Cargando..."
        }

        <h3>Marco Triguero Soto</h3>
        <h3>Universidad Nacional de Costa Rica</h3>
        <h3>Portafolio Profesional</h3>    
     
    </div>);
    }

};

export default WeatherLocation;