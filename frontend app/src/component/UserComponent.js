import React from "react";
import UserService from "../services/UserService";

export class UserComponent extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        
        UserService.getUsers().then((response)=>{
            this.setState({users: response.data});
        });
        
        
    }
    render(){
        return (
            <div>
                <h1>Users List</h1>
                
                <table className = "table table -striped">
                    <thread>
                        <tr>
                            <td>User Id</td>
                            <td>User First name</td>
                          
                        </tr>
                    </thread>

                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td> {user.lastname}</td>
                                 </tr>   
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}