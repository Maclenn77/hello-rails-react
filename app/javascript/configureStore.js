import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

const initialState = {
    greetings: [
        {
            language: 'Spanish',
            hi: '¡Hola, bienvenidos!'
        }
    ]
};

const rootReducer = (state, action) => {
    console.log(action.type);
    switch (action.type) {
        default:
            return state
    }
}

const configureStore = () => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}

export default configureStore