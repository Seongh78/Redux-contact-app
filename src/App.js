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
        {/* 네비 */}
        <Navbar className="App-header" />
        {/* 라우터 */}
        <Hub />
      </div>
    );
  }
}
// 
export default App;