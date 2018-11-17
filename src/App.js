import React, { Component } from 'react';

import { Navbar, FixedButton, ResponsiveDialog } from './components/commons';
import ContactList from './components/contacts/ContactList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="App-header" />
        <ContactList />
        <FixedButton />
      </div>
    );
  }
}
// s
export default App;
