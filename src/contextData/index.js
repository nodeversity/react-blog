import React, { createContext, useReducer } from 'react';

//Import the individual REDUCERS that help get the new state upon state 'changes'
import postReducer, { initialPostState } from './postReducer'
import commentReducer from './commentReducer';


const initialState = {
    posts: postReducer,
    comments: commentReducer
}

export const AppContext = createContext(initialState);
const [state, dispatch] = useReducer(AppReducer, initialState);

// Create the 'Provider' component to wrap the root App component and supply 
// the global app state to its 'children' components.

export const AppProvider = ({ children }) => {

    return (<AppContext.Provider value={{
        posts: state.posts,
        comments: state.comments
    }}>
        { children }
    </AppContext.Provider>)
}
