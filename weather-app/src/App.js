import React, { Component } from 'react';
import LocationList from './components/LocationList';

 
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
     
      <div className="App">

       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <LocationList></LocationList>
          
        </header>

        
      </div>
    );
  }
}

export default App;
