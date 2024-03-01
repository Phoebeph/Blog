import * as api from '../api';

// return action Creators
export const getPosts = () => async (dispatch) => {
    try {
        //get data object from api fetchPosts()
        const {data} = await api.fetchPosts();
        
        //payload is data where to store posts
        /*dispatch an action which must has type of action being performed and payload which takes data
        for update
        dispatch would send action to the store, which is only way to trigger 
        a state change in redux*/
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        //post api request to the server
        const {data} = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

