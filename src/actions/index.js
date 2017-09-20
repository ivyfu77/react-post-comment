import { fetchData } from '../utils/api';

export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

export function addPost () {
  return {
    type: ADD_POST,
    msg: "Will Add a New Post"
  }
}

export function removePost () {
  return {
    type: REMOVE_POST,
    msg: "Will Remove the Post"
  }
}

export function fetchPosts () {
  return (dispatch) => {
    fetchData('posts')
      .then((data) => {
        dispatch({ 
          type: FETCH_POSTS,
          posts: data
        });
      })
  }
}