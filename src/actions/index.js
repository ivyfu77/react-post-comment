export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

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