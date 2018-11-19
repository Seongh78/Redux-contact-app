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


// import React, { Component, Fragment } from 'react';

// import { 
//   Navbar, 
//   // ResponsiveDialog,
// } from './components/commons';

// import { 
//   Route,
//   // Switch, 
// } from 'react-router-dom';

// import {
//   ContactList, 
//   ContactEdit, 
//   ContactCreate
// } from './components/contacts';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar className="App-header" />

//         <Fragment>
//           <Route path="/" component={ContactList} exact />
//           <Route path="/contacts/:id" component={ContactEdit} />
//           <Route path="/favorite" component={ContactList} exact />
//           <Route path="/create" component={ContactCreate} exact />
//         </Fragment>
        
        
//       </div>
//     );
//   }
// }
// // 
// export default App;
