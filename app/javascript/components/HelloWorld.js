import React from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types"

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

const getGreetings = () => {
  console.log('getGreetings() Action')
  return {
    type: GET_GREETINGS_REQUEST
  };
};

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>Get Greeting</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
