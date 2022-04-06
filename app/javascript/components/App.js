import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import HelloWorld from './HelloWorld'
import { Provider } from "react-redux";

import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <HelloWorld greeting="Friend"/>
      </Provider>
      
     // <BrowserRouter>
      //   <Switch>
      //     <Route exact path="/" render={() => ("Home")} />
      //     <Route exact path="/hello" render={() => <HelloWorld greeting="Friend"/>} />
      //   </Switch>
      // </BrowserRouter> 
    );
  }
}

export default App
