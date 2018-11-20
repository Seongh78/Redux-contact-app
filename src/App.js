import React, { Component } from 'react';

import { 
  Navbar, 
  // ResponsiveDialog,
} from './components/commons';

import {
  Hub,
} from './components/containers';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="App-header" />

        <Hub />
        
        
      </div>
    );
  }
}
// 
export default App;