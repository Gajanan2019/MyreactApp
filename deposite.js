import React from "react";
import {BrowserRouter as Router,Switch,Link,Route } from 'react-router-dom'; 
import FDComp from "./fdDeposite";
import RDComp from "./rdDeposite";

class DepositeComp extends React.Component{
render(){

  return(
     <Router><div>
     
      <div align="Center">
            
             <Link to={'/fd'}>FD Deposite / </Link>
             <Link to={'/rd'}>RD Deposite </Link>
            
            
      </div>
                <Switch>  
                        <Route exact path='/fd' component={FDComp}/>
                        <Route exact path='/rd' component={RDComp}/>
                         
                </Switch>
      </div>
      </Router>
         
    );
}

}
export default DepositeComp;