import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRouter from './component/PrivateRouter';
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
import Freehand from './component/Freehand';
class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { auth } = this.props;
    const comp = auth.uid ? <Dashboard /> : <Login />
    return (
        <Router>
        <div className="container-fluid">
          <Switch>
            {/* <PrivateRouter path="/" exact auth={auth} component={Dashboard} /> */ }
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/freehand" exact component={ Freehand } />  
          </Switch>
        </div>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}
export default connect(mapStateToProps)(App);
