import React, { Component } from 'react';
import Main from './pages/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { ACCOUNT_HOLDERS } from './shared/accountHolders';
// import Home from './pages/Home';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     checkingAccounts: ACCOUNT_HOLDERS[0].checkingAccounts
  //   }
  //   console.log(ACCOUNT_HOLDERS[0].checkingAccounts)
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
          {/* <Home checkingAccounts={this.state.checkingAccounts} /> */}
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
