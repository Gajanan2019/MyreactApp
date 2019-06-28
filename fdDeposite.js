import React from "react";

class FDComp extends React.Component{
    
    constructor() {
    super();
    this.state = {
      pripalAmt: 0,
      year: 0,
      maturity: 0,
      roi: 0

    };
    this.valueAChange = this.valueAChange.bind(this);
    this.valueBChange = this.valueBChange.bind(this);
    this.rateOfIntChange=this.rateOfIntChange.bind(this);
    this.cal=this.cal.bind(this);
  }
     valueAChange (evt) {
  
    this.setState({ pripalAmt: Number(evt.target.value) });
  }
  valueBChange(evt) {
    
    this.setState({ year: Number(evt.target.value) });
  }
  rateOfIntChange(evt) {
    
    this.setState({ roi: Number(evt.target.value) });
  }


 
   cal(){
        let x=0;
     
        let y = this.state.pripalAmt+(this.state.pripalAmt*this.state.roi*this.state.year/100);
        
        this.setState({
          
          
           maturity:y
        })

    } 
 


render(){

  return(
            <form align="center">
           <h2>Fexed Deposite</h2>
      <div>
      
          <table border="1" align="center">
  <tr>
    <th></th>
    <th>FD</th>
   
  </tr>
  <tr>
    <td>Princeple Amt  :</td>
    <td><input type="number"  onChange={this.valueAChange}/></td>
    
  </tr>
  <tr>
    <td>Duration</td>
    <td><input type="number"  onChange={this.valueBChange}/></td>
    
  </tr>
  <tr>
    <td>Rate of Int</td>
    <td><input type="number" onChange={this.rateOfIntChange}/></td>
    
  </tr>
  <tr>
    <td>Maturity</td>
    <td><input type="number"  value={this.state.maturity}/></td>
   
  </tr>
 <tr>
    <td><input type="button" onClick={this.cal} value="Calculate"/> </td>
    <td><input type="button" onClick={this.addResetAction} value="Reset"/> </td>
    
  </tr>
 
</table>
           
           
      </div>
      </form>
    );
}

}
export default FDComp;