import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { withTracker } from 'meteor/react-meteor-data';
 
// App component - represents the whole app
class Welcome extends Component {
    
  render() {
      return (
        <header>
        <div id ="WelcomeContainer">
        { this.props.currentUser ?
            <h1 >BEM VINDO!!!</h1>
        :'NÃO TA BEM VINDO'}
            <AccountsUIWrapper />
        </div>
        </header>
      );
  }
}
export default withTracker(() => {
    return {
      currentUser: Meteor.user(),
    };
  })(Welcome);
  
  