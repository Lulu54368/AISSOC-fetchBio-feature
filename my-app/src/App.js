import React from 'react';
import ReactDOM from 'react-dom';
import { Profile } from './Profile';
import { Directory } from './Directory';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: null,
      searchItem: '',
      userNameList: ['dog', 'cat', 'komodo'],
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleReturnToDirectoryClick = this.handleReturnToDirectoryClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  
  
  handleChoose(newUsername) {
    this.setState({ currentUsername: newUsername });
  }

  handleReturnToDirectoryClick() {
    this.setState({ currentUsername: null });
  }
  
  handleFilter(e){
    
    this.setState({searchItem: e.target.value});

    this.setState({userNameList: ['dog', 'cat', 'komodo'].filter((val) => {
      if(this.state.searchItem === ""){
   
        return val;
      }
      else if(val.toLowerCase().includes(this.state.searchItem.toLowerCase())){
     
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
      body = <Directory onChoose={this.handleChoose} list = { this.state.userNameList}/>;
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

