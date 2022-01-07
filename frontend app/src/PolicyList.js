
import React from "react";
import { fetchPolicyData , cancelFetch} from "./dataFetcher";

export class PolicyList extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {policyList: []}
    }
  
    loadPolicyData(){
        this.fetchID = this.setState({policyData: []});
        fetchPolicyData(this.props.username, (policyData) => {
          this.setState({ policyList: policyData });
        });
      
     
    }
    componentDidMount(){
        
        this.loadPolicyData();
    }
   
    componentWillUnmount(){

        cancelFetch(this.fetchID)
    }
    
  
    render() {
        const isLoading = this.state.policyList === [] ? true: false;
       
        return (
            <div>
                
            <div>
          {!isLoading}
            </div>

            <ul>
                
              {this.state.policyList.map((policy) => (
                <li key={policy.policyId}>
                 {policy.policyName}
                </li>
              ))}
            </ul>
            
            </div>
          );
     
      
    
    }
  }