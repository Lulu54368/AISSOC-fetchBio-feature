import React from 'react';
import ReactDOM from 'react-dom';
import { Profile } from './Profile';
import { Directory } from './Directory';
import UserService from './services/UserService';
export class App extends React.Component {
 
  constructor(props) {
    
    super(props);
    this.state = {
      currentUsername: null,
      searchItem: '',
      userNameList: [],
      filteredNameList: []
    };
    
    this.handleChoose = this.handleChoose.bind(this);
    this.handleReturnToDirectoryClick = this.handleReturnToDirectoryClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
   
  }
  
  componentDidMount(){
     
    UserService.getUsers().then((response)=>{
        
        this.setState({userNameList: response.data, filteredNameList: response.data});
       
    });
  
  }
  
  handleChoose(newUsername) {
   const filtered = this.state.filteredNameList.filter((user) => user.name === newUsername);
    
    this.setState({ currentUsername: filtered });
    
  }

  handleReturnToDirectoryClick() {
    this.setState({ currentUsername: null });
  }
  
  handleFilter(e){
    
    this.setState({searchItem: e.target.value});

    this.setState({filteredNameList: this.state.userNameList.filter((val) => {
      if(this.state.searchItem === ""){
      
        return val;
      }
      else if(val.name.toLowerCase().includes(this.state.searchItem.toLowerCase())){
        
        return val;
      }

    })});
 

  }
    
  
  render() {
    
    let body;
    
    if (this.state.currentUsername) {
      body = (
        <Profile
          username={this.state.currentUsername}
          onChoose={this.handleChoose}
        />
      );
    } else {
      body = <Directory onChoose={this.handleChoose} list = { this.state.filteredNameList.map((user)=>user.name)}/>;
    }
   
 
 
   
      
    return (
      <div className="App">
        <header>
          <h1>PetBook</h1>
          
          <input type = "text" placeholder = "search ..." onChange = {this.handleFilter}/>
          
          <nav>
            {this.state.currentUsername && (
              <button onClick={this.handleReturnToDirectoryClick}>
                Return to directory
              </button>
            )}
          </nav>
        </header>

        <main>{body}</main>
        
        
      </div>
    );
  }
}

