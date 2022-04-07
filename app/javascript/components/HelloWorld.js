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
    // const { greetings } = this.props;
    // const greetingsList = greetings.map((greeting) => {
    //   return <li>{greeting.lang} {greeting.hi}</li>
    // })
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getGreetingsBtn" onClick={() => getGreetings()}>Get Greeting</button>
        <br />
        {/* <ul>{ greetingsList }</ul> */}
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
