import React from 'react';
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import HomePage from './container/HomePage';
import LoginPage from './container/LoginPage';
class Component extends React.Component {
  render() {
    return(
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    )
  }
}

export default Component;