import React, {Component}  from 'react';
import CirccularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getURLWeatherByCity from './../../Services/getURLByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import transforWeather from './../../Services/transforWeather';
import './styles.css';





class WeatherLocation extends Component {
   
    constructor(props){
        super(props);
        
        const {city} = props;

        this.state= {
            city,
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
        const api_weather = getURLWeatherByCity(this.state.city);
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
            <CirccularProgress/>
        }

        <h3>Marco Triguero Soto</h3>
        <h3>Universidad Nacional de Costa Rica</h3>
        <h3>Portafolio Profesional</h3>    
     
    </div>);
    }

};
WeatherLocation.PropTypes = {
    city: PropTypes.string.isRequired,

}
export default WeatherLocation;