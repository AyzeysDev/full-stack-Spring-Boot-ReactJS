import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import AuthRoute from './AuthRoute.jsx';
import ActivityList from './ActivityList.jsx';
import HeaderView from './HeaderView.jsx';
import FooterView from './FooterView.jsx';
import Logout from './Logout.jsx';
import LandingPage from './LandingPage.jsx';
import Activity from './Activity.jsx';


class SpReactivityList extends Component {
  render() {
    return (
      <div className="SpreactivityList">
        <Router>
          <>
            <HeaderView/>
            <Switch>
              <Route path="/" exact component={Login}/>
              <Route path="/login" component={Login}/>
              <AuthRoute path="/landing/:name" component={LandingPage}/>
              <AuthRoute path="/list/:id" component={Activity}/>
              <AuthRoute path="/list" component={ActivityList}/>
              <AuthRoute path="/logout" component={Logout}/>
                            
              <Route component={ErrorValidator}/>
            </Switch>
            <FooterView/>
            </>
        </Router>
      </div>
    )
  }
}

export default SpReactivityList;