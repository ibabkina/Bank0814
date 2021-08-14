import React, { Component } from 'react';
import Home from './Home';
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { ACCOUNT_HOLDERS } from '../shared/accountHolders';
import AccountDetail from './AccountDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checkingAccounts: ACCOUNT_HOLDERS[0].checkingAccounts,
      // selectedAccount: null
      // transactions: transactions
    }
    // console.log(ACCOUNT_HOLDERS[0].checkingAccounts)
  }

  // onAccountSelect(accountId) {
  //   this.setState({ selectedAccount: accountId });
  //   console.log('accountId = ' + accountId)
  //   console.log('this.state.selectedAccount = ' + this.state.selectedAccount)
  // }

  // const accountN = this.state.checkingAccounts.find((account) => { return account.accountNumber < this.state.selectedAccount})
  // console.log('accountN = ' + accountN)
  // const accountM = this.state.checkingAccounts.map((account) => { return account.accountNumber})
  // console.log('accountM= ' + accountM)
  // this.state.checkingAccounts.filter((account) => {console.log(account.accountNumber === this.state.selectedAccount)})
  // }

  render() {

    // const HomePage = () => {
    //   // console.log("in Home"); 
    //   return (
    //     <Home />
    //   )
    // }

      const AccountWithId = ({match}) => {
      // console.log("in AccountWithId"); //match = " + match.params);
      return(
        <AccountDetail account={this.state.checkingAccounts.filter((account) => account.accountNumber === parseInt(match.params.accountId,10))[0]}
         />
      )

    }

    return (
      <div>
        <Header />
        <Login />
        {/* <Home checkingAccounts={this.state.checkingAccounts}
        // Need to pass onAccountSelect to the Home components
          onClick={(accountId) => this.onAccountSelect(accountId)} />  */}
        {/* We are passing the first element [0] of the below subarray (.filter returns subarray) to AccountDetail: */}
        {/* <AccountDetail selectedAccount={this.state.checkingAccounts.filter((account) => account.accountNumber === this.state.selectedAccount)[0]} /> */}
        <Switch>
          {/* <Route path="/login" component={HomePage} /> */}
          {/* <Route path="/home" component={HomePage} /> */}
          <Route exact path="/home" component={() => <Home checkingAccounts={this.state.checkingAccounts} />} />
          <Route path="/home/:accountId" component={AccountWithId} />
          {/* //if you don't need to send props then {Contact} */}
          <Route exact path='/contactus' component={Contact} />
          {/* If path doesn't match will be redicected to Home - change to Main!!! */}
          {/* <Redirect to="/" /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;