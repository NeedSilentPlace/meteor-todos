import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import '../imports/startup/accounts-config'; //client entry point에서 알아야한다.
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});
