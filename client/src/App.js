import React, { Component } from 'react';
import Layout from './components/common/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <Layout>
          <Switch>
              <Route exact path="/" component={Home}/>
          </Switch>
      </Layout>
    )
  }
}

export default App;
