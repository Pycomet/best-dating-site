import React, { useEffect } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "./PrivateRoute";

import About from '../pages/About'
import Chat from '../pages/Home'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignOut from '../pages/SignOut'
import SignUp from '../pages/SignUp'

const Routes = props => {
  console.log(props)
  return (
    <div>
      {/* <NavBar auth={props.state.auth} /> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <SignIn />
        </Route>
        <Route path='/categories/:id'>
          <About />
        </Route>
        <PrivateRoute path='/chat' auth={props.state.auth}>
          <Chat />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

export default withRouter(connect(mapStateToProps)(Routes));
