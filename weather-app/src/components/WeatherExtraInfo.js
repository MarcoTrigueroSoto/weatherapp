import React from 'react';

const WeatherExtraInfo = ({humidity,wind}) =>(
<div>
    <span>Información Extra</span>
        <table>
            <thead>
             <tr>
                 <th>Humedad</th>
                 <th>Viento</th>
            </tr>
            </thead>
            <tr>    
                <td>
                    <span>{`${humidity} % -`}</span>
                </td> 
            <tr>
                <td>     
                    <span>{`${wind} `}</span>  
                </td>
            </tr>
            </tr>
    </table>
</div>
    
);

export default WeatherExtraInfo;