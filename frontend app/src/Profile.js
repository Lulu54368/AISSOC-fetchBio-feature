import React from 'react';
import { fetchUserData, cancelFetch, fetchPolicyData } from './dataFetcher';
import { PolicyList } from './PolicyList';


export class Profile extends React.Component {
  constructor(props){
      super(props);
      this.state = { userData: null, policyData:[] };
  }
  loadUserData(){
    //This method is to fetch a specified use
   
    this.setState({userData: null});
   
    this.fetchID = fetchUserData(this.props.username, (userData) => {
    this.setState({ userData: userData });
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
  const firstname = isLoading ? 'is loading..':  this.state.userData.firstname;
  const rebellions = isLoading ? 'is loading..':  this.state.userData.rebellions;
  const votes = isLoading ? 'is loading..':  this.state.userData.votes;
  const eletorate = isLoading ? 'is loading..':  this.state.userData.eletorate;
  const house = isLoading ? 'is loading..':  this.state.userData.house;
  const party = isLoading ? 'is loading..':  this.state.userData.party;
  const username = this.props.username;
  if (isLoading) {
    className += ' loading';
  }
 
 
  

  return (
    <div className={className}>
      <div className="profile-picture">
    
    {!isLoading }
   
      </div>
      <ul>
        <li>lastname: {lastname}</li>
        <li>firstname: {firstname}</li>
        <li>rebellions: {rebellions}</li>
        <li>votes: {votes}</li>
        <li> eletorate: {eletorate}</li>
        <li>house: {house}</li>
        <li>party: {party}</li>
      </ul>
      <PolicyList username = {username}/>  
   
    </div>
  );
}
}