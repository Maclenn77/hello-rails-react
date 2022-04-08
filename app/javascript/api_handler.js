const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';
const GET_GREETING_FAILURE = 'GET_GREETING_FAILURE';
const url = '/v1/greetings';

const initialState = 'Hi!';

const getGreetingRequest = () => ({
  type: GET_GREETING_REQUEST
})
const getGreetingSuccess = (payload) => ({
  type: GET_GREETING_SUCCESS,
  payload
})
const getGreetingFailure = () => ({
  type: GET_GREETING_FAILURE
})

export const getGreeting = () => {
  return async (dispatch) => {
    dispatch(getGreetingRequest());
    try {
      const response = await fetch(url);
      const json = await response.json()
      dispatch(getGreetingSuccess(json.message))
    }
    catch (error) {
      dispatch(getGreetingFailure)
    }
  }
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case GET_GREETING_SUCCESS:
      return payload;
    case GET_GREETING_FAILURE:
      return 'Loading failed';
  }
};

export default reducer;