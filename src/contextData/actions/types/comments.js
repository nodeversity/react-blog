/** 
* A List of all the action TYPES/(AKA 'possible scenarios') that could/shoul happen when calling the Comments API from jsonplaceholder.typicode.com 
* Each action TYPE is export for reuse in other parts of the state manager codebase, such as the actions/commentAction.js action CREATORS(functions) and the commentReducer, etc.
*/

export const NEW_COMMENT = "NEW_COMMENT"
export const NEW_COMMENT_FAILED = "NEW_COMMENT_FAILED"
export const GET_COMMENT = "GET_COMMENT"
export const GET_COMMENT_FAILED = "GET_COMMENT_FAILED"
export const GET_COMMENTS_FOR_POST = "GET_COMMENTS_FOR_POST"
export const GET_COMMENTS_FOR_POST_FAILED = "GET_COMMENTS_FOR_POST_FAILED"
export const DELETE_COMMENT = "DELETE_COMMENT"
export const DELETE_COMMENT_FAILED = "DELETE_COMMENT_FAILED"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const UPDATE_COMMENT_FAILED = "UPDATE_COMMENT_FAILED"


