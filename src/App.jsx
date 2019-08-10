import React from 'react';
import Home from './containers/home/Home';
import { StateProvider } from './StateContext';

const initialState = {
    data: {},
    loading: true,
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
    case 'loading':
        return { ...state, loading: !state.loading };
    case 'fetch data':
        console.log(action.payload);
        return { ...state, loading: false, data: action.payload };
    default:
        return state;
    }
};

const App = () => (
    <StateProvider initialState={initialState} reducer={reducer}>
        <Home />
    </StateProvider>
);

export default App;
