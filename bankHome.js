import React from "react";
import {BrowserRouter as Router,Switch,Link,Route } from 'react-router-dom'; 
import HomeComp from "./bank/home";
import ServiceComp from "./bank/service";
import AboutComp from "./bank/about";



class BankHomeComp extends React.Component{
render(){

    return(
      <Router><div>
      <div align="center"> <h1> Welcome to HDFC Bank </h1></div>
      <div align="right">
             <Link to={'/'}>Home /</Link>
            <Link to={'/service'}>Services /</Link>
            <Link to={'/about'}> About Us</Link>
            
      </div>
                <Switch>  
                        <Route exact path='/' component={HomeComp}/>
                        <Route exact path='/service' component={ServiceComp}/>
                        <Route exact path='/about' component={AboutComp}/>
                        
                </Switch>
      </div>
      </Router>
    );
}

}
export default BankHomeComp;