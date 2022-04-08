import React, { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from "prop-types"
import { getGreeting } from "../api_handler";

const HelloWorld = () => {

  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <main>
      <h1>Greetings in {greeting} </h1>
      <button ></button>
    </main>
    );
}


HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
