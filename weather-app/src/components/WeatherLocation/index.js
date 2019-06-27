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
}
    componentDidMount() {
     this.handelUpdateClick();   
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
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (<div className="weatherLocationContent" onClick={onWeatherLocationClick}>
    
        <h3>Ubicación</h3>
        <div className="Location">
        <Location city={city}/>
        </div>
        {data ?
            <WeatherData data={data}/>:
            <CirccularProgress/>
        } 
     
    </div>);
    }

};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherLocation;