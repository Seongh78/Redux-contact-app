import React, { Fragment } from 'react';
import { 
    Route,
    // Switch, 
} from 'react-router-dom';

import {
    ContactList, 
    ContactEdit, 
    ContactCreate
} from '../contacts';

const Hub = () => {
    return ( 
        <Fragment>
          <Route path="/" component={ContactList} exact />
          <Route path="/contacts/:id" component={ContactEdit} />
          <Route path="/favorite" component={ContactList} exact />
          <Route path="/create" component={ContactCreate} exact />
        </Fragment>
    );
}
 
export default Hub;