import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (
//desestructuración
    
    <div>
        <h1>
             {city}
        </h1>
    </div>
);

Location.protTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;