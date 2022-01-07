
import UserService from "./services/UserService";

  
  const timeoutByFetchId = new Map();
  
  class Fetch {
    constructor() {
    
      Object.defineProperty(this, '_id', {
        value: Date.now() + Math.random().toString().substr(2),
      });
    }
  }
  
  export function fetchUserData(username, callback) {
    var politician = null;
    UserService.getUserProfile(username.id).then((response)=>{
      
      politician = response.data;
      
    });
   
    const fetch = new Fetch();
   
    const delay = Math.floor(Math.random() * 1000) + 500;
    const timeout = setTimeout(() => {
      timeoutByFetchId.delete(fetch._id);
      
      callback(politician);
    }, delay);
  
    timeoutByFetchId.set(fetch._id, timeout);
  
    return fetch;
  }
  
  export function cancelFetch(fetch) {
    if (!fetch || typeof fetch !== 'object') {
      return;
    }
    const timeout = timeoutByFetchId.get(fetch._id);
    clearTimeout(timeout);
    timeoutByFetchId.delete(fetch._id);
  }