import React, { useReducer, useContext } from 'react';
import commentReducer from '../reducers/commentReducer'


const initialState = {
    comments: []
}

const [state, dispatch] = useReducer(commentReducer, initialState)

newComment = (new_comment_obj) => {
    
}