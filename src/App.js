import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Map from './components/Map';
import logo from './logo.svg';



import './App.css';

import Header from './components/Header';
require('dotenv').config();

class App extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      applicationName: 'TraficMaps'
    }
  }
  

  render(){
    return (
      <div className="App">

       <Header appName={this.state.applicationName}/>

       <Container>
         <Map />
       </Container>

      <div id="map"></div>
      </div>
    );
  }
}

export default App;
