import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  render()
  {
    return(
      <div>
      <Header/>
      <h1>Sunsoft Technologies</h1>
      <Footer/>
      </div>
    );
  }
}
class Header extends React.Component
{
  render()
  {
    return(
      <div>
      <h1>Welcome to SunSoft</h1>
      <hr/>
      </div>
    );
  }
}
class Footer extends React.Component
{
  render()
  {
    return(
      <div>
      <hr/>
      <h3>www.sunsofttechies.com</h3>
      </div>
    );
  }
}

export default App;
