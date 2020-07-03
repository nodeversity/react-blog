
//AppReducer determines how state is updated and
// passed on to the root App (and its "children")

import postReducer from './postReducer';
import commentReducer from './commentReducer';

const AppReducer = () => {
    return {
        posts: postReducer,
        comments: commentReducer
    }
};

export default AppReducer;