import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList';


const cities = [
  "Heredia, CR",
  "Guanacaste, CR",
  "Cartago, CR",
  "Upala, CR",
  "Bijagua, CR",
  "Kyoto,jp"
];


class App extends Component {
  handleSelectionLocation = (city) => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
     
      <Grid>
        <Row>
           <Col>
               <img  src={logo} className="App-logo" alt="logo" /> 
            </Col>
            <Col>
              <h3>Marco Triguero Soto</h3>
              <h3>Universidad Nacional de Costa Rica</h3>
              <h3>Portafolio Profesional</h3> 
            </Col>
        </Row>

        <Row className="App-header" >        
          <Col xs={12} md={6}>
             <LocationList cities={cities}
                 onSelectedLocation={this.handleSelectionLocation}>
             </LocationList>
          </Col>  
          <Col> 
            <div className="details"></div>
          </Col>
        </Row>
              
      </Grid>
    );
  }
}

export default App;
