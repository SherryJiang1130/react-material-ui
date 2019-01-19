import React, { Component } from 'react';
import './App.css';

import Layerout from './component/Layout.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <div className="App">
       <CssBaseline> 
        <Layerout/>     
       </CssBaseline>
      </div>
    );
  }
}

export default App;
