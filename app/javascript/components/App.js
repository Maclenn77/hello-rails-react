import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HelloWorld from './HelloWorld'
import { Provider } from "react-redux";

import store from "../configureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
       <Router>
         <Routes>
            <Route exact path="/" element={(<h2>Welcome to Greeting App!</h2>)} />
            <Route exact path="/hello" element={<HelloWorld />} />
         </Routes>
       </Router>
      </Provider>
    );
  }
}

export default App
