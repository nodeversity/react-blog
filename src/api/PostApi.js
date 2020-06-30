import Axios from '../api';

class PostApi {
    /**
        Handles all the API CRUD calls to http://jsonplaceholder.typicode.com/posts
        for Blog Posts to use within the app

        Note: JSONPlaceholder *does not persist* UPDATE, PATCH and DELETE requests; it only simulates them.
    */

    static getAllPosts(){
        return Axios.get(`posts/?_limit=25`);
    }
    
    static getPost(postId){
        return Axios.get(`posts/${postId}`);
    }

    static updatePost(postId, updated_post){
        return Axios.put(`posts/${postId}`, updated_post);
    }

    static deletePost(postId){
        return Axios.delete(`posts/${postId}`);
    }

    static newPost(newPostObj){
        return Axios.post(`posts/`, newPostObj);
    }

}

export default PostApi;

