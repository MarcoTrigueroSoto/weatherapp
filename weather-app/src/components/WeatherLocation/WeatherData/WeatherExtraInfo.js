import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';



const WeatherExtraInfo = ({humidity,wind}) =>(
<div className="weatherExtraInfoContent" >
    <span>
        Información 
    </span>

        <table class="Table" className="weatherTableContent" border="1px">
            <thead>
             <tr>
                 <th className="extraInfoText">Humedad</th>
                 <th className="extraInfoText">Viento</th>
            </tr>
            </thead>
           <tbody>
             <tr>    
                    <td>
                       <span>{`${humidity} % -`}</span>
                    </td> 
                    <td>     
                       <span >{`${wind} `}</span>  
                  </td>
                </tr>    
            </tbody>
    </table>
</div>
    
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;