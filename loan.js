import React from "react";

class LoanComp extends React.Component{
render(){

  return(
                    <form align="center">
                                <h2>Loan</h2>
                                <div>
                                     <table border="1" align="center">
                                            <tr>
                                                <th></th>
                                                <th> Loan</th>
                                            
                                            </tr>
                                            <tr>
                                                <td>Loan Amt  :</td>
                                                <td><input type="text"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td>Duration</td>
                                                <td><input type="text"/></td>
                                                
                                            </tr>
                                            <tr>
                                                <td>Type</td>
                                                <td><select name="loanType" width="100%">
                                                <option value="per">Personal Loan</option>
                                                <option value="vah">vahical Loan</option>
                                                <option value="home">Home Loan</option>
                                            
                                            </select></td>
                                                
                                            </tr>
                                            <tr>
                                                <td>Rate of Int</td>
                                                <td><input type="text"/></td>
                                            
                                            </tr>
                                            <tr>
                                                <td>EMI</td>
                                                <td><input type="text"/></td>
                                                
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
export default LoanComp;