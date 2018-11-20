import React, { Fragment } from 'react';
import { 
    Route,
    // Switch, 
} from 'react-router-dom';

import {
    ContactList, 
    ContactCreate
} from '../contacts';

const Hub = () => {
    return ( 
        <Fragment>
          <Route path="/" component={ContactList} exact />
          <Route path="/favorite" component={ContactList} exact />
          <Route path="/create" component={ContactCreate} exact />
          <Route path="/contacts" component={ContactList} exact />
          <Route path="/contacts/:id" component={ContactCreate} />
        </Fragment>
    );
}
 
export default Hub;