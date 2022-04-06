import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HelloWorld from './HelloWorld'
import { Provider } from "react-redux";

import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
     <Router>
        <Routes>
          <Route exact path="/" element={(<h2>Welcome to Greeting App!</h2>)} />
          <Route exact path="/hello" element={<HelloWorld greeting="Friend"/>} />
        </Routes>
      </Router> 
    );
  }
}

export default App
