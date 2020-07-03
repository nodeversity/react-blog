import React, { createContext, useReducer } from 'react';

//Import the individual REDUCERS that help get the new state upon state 'changes'
import AppReducer from './reducers/AppReducer'
//import postReducer, { initialPostState } from './reducers/postReducer'
//import commentReducer from './reducers/commentReducer';


const initialState = {
    posts: [],
    comments: []
}

export const AppContext = createContext(initialState);
// Create the 'Provider' component to wrap the root App component and supply 
// the global app state to its 'children' components.

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<AppContext.Provider value={{
        posts: state.posts,
        comments: state.comments
    }}>
        { children }
    </AppContext.Provider>)
}
