import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Demo from './demo';
import Abc from './Abc';
import Xyz from './Xyz';
import Person from './Person';
import EventDemo from './EventDemo';
import StateFull from './stateFull';
import FormsComp from './Forms';
import CrudOperation from './FormComponent';
import RoutingDemo from './RoutingDemo';
import BankHomeComp from './bankHome';



/*
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Demo />, document.getElementById('d1'));
ReactDOM.render(<div><Abc /> <Demo /><Abc /></div>, document.getElementById('d2'));
ReactDOM.render(<div>
<Xyz>Ganesh </Xyz>
<Xyz >Mahesh</Xyz>
<Xyz>Suresh</Xyz>
</div>, document.getElementById('x1'));
*/

//ReactDOM.render(<Person name="Ramesh"/>, document.getElementById('p1'));
//ReactDOM.render(<EventDemo />, document.getElementById('ed'));
//ReactDOM.render(<StateFull />, document.getElementById('cnt'));
//ReactDOM.render(<FormsComp />, document.getElementById('fd'));
//ReactDOM.render(<CrudOperation />, document.getElementById('formOp'));

//ReactDOM.render(<RoutingDemo />, document.getElementById('root'));
ReactDOM.render(<BankHomeComp />, document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
