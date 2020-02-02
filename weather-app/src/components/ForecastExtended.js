import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import transformForecast from './../Services/transformForeCast';
import ForecastItem from './Forecastitem/index';

const  api_key ="9615f4b4ea56d013a90f49128a0e289d";
const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {forecastData: null};
    }

    componentDidMount(){
       this.updatecity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city ){
            this.setState({forecastData: null});
            this.updatecity(nextProps.city);
        }
    }
    
    updatecity = city => {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
            ).then(
                WeatherData => {
                    console.log(WeatherData);
                    const forecastData = transformForecast(WeatherData);
                    console.log(forecastData);
                    this.setState({forecastData})
                }
            )
        
    }

    renderForecastItemDays(forecastData){
        return forecastData.map( forecast => 
        (<ForecastItem
            key = {`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour = {forecast.hour} 
            data={forecast.data}>
            </ForecastItem>)); 
    }

    renderProgress = () => {
        return <h3>Cargando Pronóstico Extendido...</h3>;

    }
    render(){
        const {city} = this.props;
        const {forecastData} = this.state;

        return(<div> 
            <h2 className="forecast-title">Pronostico Extendido para {city}</h2>
            {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
        </div>);

        
    }
};

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;