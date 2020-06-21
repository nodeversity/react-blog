import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


//initial blog app state (data): an object { }
const initialState = {
    blog_posts: [] //empty, by default
}

//Create Context/data for app using its 'initialState' object above
export const GlobalContext = createContext(initialState)

//create global/app provider component (to wrap all the components of this app
// so that they all have access to the global state/context)

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            blog_posts: state.blog_posts
        }}>
            { children } /** All the sub-components ("chilren") of the root App component  */
        </GlobalContext.Provider>
    )
}