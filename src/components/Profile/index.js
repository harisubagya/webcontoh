import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Vision from './Vision';
import Contact from './Contact';
import Gallery from './Gallery';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <Switch>
        <Route path="/profile/visi">
          <Vision />
        </Route>
        <Route path="/profile/contact">
          <Contact />
        </Route>
        <Route path="/profile/gallery">
          <Gallery />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;