import React from 'react';

const Location = (props) => {
//desestructuración
    const {city } = props;
    return (<div><h1>{city}</h1></div>)

};

export default Location;