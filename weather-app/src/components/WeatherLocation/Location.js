import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => (
//desestructuración
    
    <div className="locationContent">
        <h1>
             {city}
        </h1>
    </div>
);

Location.protTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;