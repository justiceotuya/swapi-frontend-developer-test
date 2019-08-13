import React, { createContext, useReducer, useContext } from 'react';

export const StateContext = createContext();

// create new React component called StateProvider.that wraps it’s children with Provider that accepts value prop.
export const StateProvider = ({ reducer, initialState, children }) => (
    // pass result of the useReducer hook as a value to our Provider.So it becomes available in any component the app component tree.
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// a custom hook that helps in accessing your state in any component of your application with less amount of code.It returns exactly the same[state, dispatch] array, that is passed as a value to our Provider.
export const useStateValue = () => useContext(StateContext);
