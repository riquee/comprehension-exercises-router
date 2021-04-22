import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/Users';
import StricAcess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About} />
          <Route
            path="/strict"
            render={() => <StricAcess username={'joao'} password="1234"></StricAcess>}
          ></Route>
          <Route
            path="/user/:id"
            render={(props) => <User {...props} greetingMessage="Good Morning" />}
          />
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="/strict">Strict</Link>
      </BrowserRouter>
    );
  }
}

export default App;
