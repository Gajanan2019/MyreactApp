import React from "react";

class AccountComp extends React.Component{
render(){

  return(
      <form align="center">
      <h2>Account</h2>
      <div>
                <table border="1" align="center">
                    <tr>
                        <th></th>
                        <th>Account Details</th>
                    
                    </tr>
                    <tr>
                        <td>First Name  :</td>
                        <td><input type="text"/></td>
                        
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text"/></td>
                        
                    </tr>
                    <tr>
                        <td>Mobile No</td>
                        <td><input type="text"/></td>
                        
                    </tr>
                    <tr>
                        <td>Email id</td>
                        <td><input type="text"/></td>
                    
                    </tr>
                    
                    <tr>
                        <td><input type="button" onClick={this.addCalAction} value="Submit"/> </td>
                        <td><input type="button" onClick={this.addResetAction} value="Reset"/> </td>
                        
                    </tr>
 
              </table> 
      </div>
      </form>
    );
}

}
export default AccountComp;