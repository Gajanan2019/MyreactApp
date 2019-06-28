import React from "react";

class RDComp extends React.Component{
render(){

  return(
            <form align="center">
                  <h2>Recurring Deposit</h2>
                    <div>
                                    <table border="1" align="center">
                                <tr>
                                    <th></th>
                                    <th>RD</th>
                                
                                </tr>
                                <tr>
                                    <td>My initial amount of    :</td>
                                    <td><input type="number"/></td>
                                    
                                </tr>
                                <tr>
                                    <td>Date of Opening of RD</td>
                                    <td><input type="number"/></td>
                                    
                                </tr>
                                <tr>
                                    <td>For a term of (months)</td>
                                    <td><input type="number"/></td>
                                    
                                </tr>
                                <tr>
                                    <td>Due Date of RD</td>
                                    <td><input type="number"/></td>
                                
                                </tr>
                                <tr>
                                    <td>At an interest rate of (%)</td>
                                    <td><input type="number"/></td>
                                
                                </tr>
                                <tr>
                                    <td>Maturity value is</td>
                                    <td><input type="number"/></td>
                                
                                </tr>
                                <tr>
                                    <td><input type="button" onClick={this.addCalAction} value="Calculate"/> </td>
                                    <td><input type="button" onClick={this.addResetAction} value="Reset"/> </td>
                                    
                                </tr>
                                
                                </table>
                    </div>
      </form>
    );
}

}
export default RDComp;