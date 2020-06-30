import Axios from '../api';

class CommentApi {
    /**
     * Handles all CRUD calls made against the http://jsonplaceholder.typicode.com/comments
     * API endpoint
     * Caveat: CREATE, UPDATE and PATCH methods are only simulated.
     */

     static getCommentsForPost(postId){
         return Axios.get(`comments?postId=${postId}`);
     }

     static getComment(commentId){
         return Axios.get(`comments/${commentId}`);
     }

     static deleteComment(commentId){
         return Axios.delete(`comments/${commentId}`);
     }

     static newComment(newCommentObj){
         return Axios.post(`comments/`, newCommentObj);
     }
}

export default CommentApi;