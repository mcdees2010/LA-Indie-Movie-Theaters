import React, { Component } from 'react';
import Layout from './components/common/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends Component {
  state = { currentUser: httpClient.getCurrentUser()}
  onAuthSuccess = () => {
    this.setState({currentUser: httpClient.getCurrentUser()});
  }
  render() {
    let { currentUser } = this.state;
    let { onAuthSuccess } = this;
    return (
      <Layout>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" render={(props) => {
                return <Login {...props} onLoginSuccess={onAuthSuccess}/>
              }}/>
          </Switch>
      </Layout>
    )
  }
}

export default App;
