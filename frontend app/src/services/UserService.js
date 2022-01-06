import axios from "axios";
const USERS_REST_API_URL = "http://127.0.0.1:9095/politics"
class UserService{
    getUsers(){
       
       return  axios.get(USERS_REST_API_URL + '/all');
    }
    getUserProfile(id){
        return axios.get(USERS_REST_API_URL +  `/${id}`)
    }
    getPolicy(id){
        return axios.get(USERS_REST_API_URL +  `/${id}` + '/policy')
    }   
    
  

}
export default new UserService();