const BACK_END_PORT = '5001';
const APP_TOKEN = 'whatever-you-want';

export function fetchData (name) {

  const url = document.location.protocol + "//" + 
              document.location.hostname + ":" + 
              BACK_END_PORT + "/" + 
              name;

  return fetch(url, { headers: { 'Authorization': APP_TOKEN } })
    .then((res) => res.json())
    .then((data) => data)
}

export function getPostComments(postId) {
  const url = document.location.protocol + "//" + 
              document.location.hostname + ":" + 
              BACK_END_PORT + "/posts/" + postId + "/comments";
  return fetch(url, { headers: { 'Authorization': APP_TOKEN } })
                    .then((res) => res.json())
                    .then((data) => data);
}