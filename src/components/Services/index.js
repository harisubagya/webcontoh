import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Information from './Information';
import Report from './Report';

function Services() {
  return (
    <div>
      <h2>Services</h2>
      <Switch>
        <Route path="/services/information">
          <Information />
        </Route>
        <Route path="/services/report">
          <Report />
        </Route>
      </Switch>
    </div>
  );
}

export default Services;
