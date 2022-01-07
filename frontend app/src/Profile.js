import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './UserlIst';

export class Profile extends React.Component {
  constructor(props){
      super(props);
      this.state = { userData: null };
  }
  loadUserData(){
    //This method is to fetch a specified use
   
    this.setState({userData: null});
   
    this.fetchID = fetchUserData(this.props.username, (userData) => {
    this.setState({ userData });
    });
    
   
}

componentDidMount(){
 
  this.loadUserData();
}
componentWillUnmount(){

  cancelFetch(this.fetchID)
}
componentDidUpdate(prevProps){

  if(this.props.username !== prevProps.username){
    cancelFetch(this.fetchID);
    this.loadUserData();
  }
}

render() {
 
  const isLoading = this.state.userData === null ? true: false;
  let className = 'Profile';
  const lastname = isLoading ? 'is loading..':  this.state.userData.lastname;
  alert(lastname);
  if (isLoading) {
    className += ' loading';
  }


 
  

  return (
    <div className={className}>
      <div className="profile-picture">
    
    {!isLoading }

      </div>
      <p>{lastname}</p>
    </div>
  );
}
}