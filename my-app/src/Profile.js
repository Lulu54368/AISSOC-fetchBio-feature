import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './UserlIst';

export class Profile extends React.Component {
  constructor(props){
      super(props);
      this.state = { userData: null };
    }
  loadUserData(){
    
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
    const name = isLoading ? 'is loading..':  this.state.userData.name;
    const bio = isLoading ? 'is loading..':  this.state.userData.bio;
    const friends=  isLoading ? []:  this.state.userData.friends;
    if (isLoading) {
      className += ' loading';
    }
  
  
   
    

    return (
      <div className={className}>
        <div className="profile-picture">
      
      {!isLoading && (
      <img src={this.state.userData.profilePictureUrl} alt="" />
      )}
  
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>{friends}</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}