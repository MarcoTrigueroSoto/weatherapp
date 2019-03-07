import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './logo.svg';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Heredia, CR",
  "Guanacaste, CR",
  "Cartago, CR",
  "Upala, CR",
  "Bijagua, CR",
  "Kyoto,jp",
  "Paris, FR"
];


class App extends Component {
  handleSelectionLocation = (city) => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (

        
       /*  
         <Col> </Col>
           <Col>   
              <h3>Marco Triguero Soto</h3>
              <h3>Universidad Nacional de Costa Rica</h3>
              <h3>Portafolio Profesional</h3> 
            </Col>
        </Row>
       */
      <Grid > 
        <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                <img  src={logo} className="App-logo" alt="logo" />
                  Weather App
                </Typography>
              </Toolbar>
              </AppBar>
        </Row>
        <Row >        
          <Col xs={12} md={6}>
             <LocationList 
                 cities={cities}
                 onSelectedLocation={this.handleSelectionLocation}>
             </LocationList>
          </Col>
          
          <Col xs={12} md={6}>
              
              <div className="details"></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;