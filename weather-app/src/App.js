import React, { Component } from 'react';
import LocationList from './components/LocationList';
import logo from './logo.svg';
import './App.css';


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
     
      <div className="App">

       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <LocationList cities={cities}
          onSelectedLocation={this.handleSelectionLocation}>
            
          </LocationList>
          
        </header>

        
      </div>
    );
  }
}

export default App;
