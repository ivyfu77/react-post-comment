const BACK_END_PORT = '5001';
const APP_TOKEN = 'whatever-you-want';

export function fetchData (name) {

  const url = document.location.protocol + "//" + 
              document.location.hostname + ":" + 
              BACK_END_PORT + "/" + 
              name;

  return fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
    .then((res) => res.json())
    .then((data) => data)
}