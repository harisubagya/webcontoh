import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';

function Office() {
  return (
    <div>
      <h2>Office</h2>
      <Switch>
        <Route path="/office/item1">
          <Item1 />
        </Route>
        <Route path="/office/item2">
          <Item2 />
        </Route>
        <Route path="/office/item3">
          <Item3 />
        </Route>
      </Switch>
    </div>
  );
}

export default Office;
