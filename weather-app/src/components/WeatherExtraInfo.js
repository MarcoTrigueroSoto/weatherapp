import React from 'react';

const WeatherExtraInfo = ({humidity,wind}) =>(
<div>
    <span>Información Extra</span>
        <table border="1px">
            <thead>
             <tr>
                 <th>Humedad</th>
                 <th>Viento</th>
            </tr>
            </thead>
           <tbody>
             <tr>    
                    <td>
                       <span>{`${humidity} % -`}</span>
                    </td> 
                    <td>     
                       <span>{`${wind} `}</span>  
                  </td>
                </tr>    
            </tbody>
    </table>
</div>
    
);

export default WeatherExtraInfo;