// import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//Restructured in functional component
// class AccountDetail extends Component {
//     constructor(props) {
//         super(props);

//         // this.state = {
//         //     // selectedAccount: null
//         // }
//     }

function RenderAccount({ account }) {
    // console.log("account = " +  account.accountNumber);
    return (
        <div className="col-12 col-md-5 m-1">
            <Card key={account.accountNumber}>
                <CardBody >
                    <CardTitle>Personal Checking: (xxxx0{account.accountNumber})  ${account.balance}</CardTitle>
                    <CardText> Transactions </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

// render() {
const AccountDetail = (props) => {
    // const selectedAccount = this.props.account;

    // if (props.selectedAccount != null) {
    if (props.account != null) {
        // console.log("account != null");

        return (
            <div className="container" >
                <div className="row">
                <Breadcrumb>
                    {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Account# {props.account.accountNumber}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>CheckingAccount: {props.account.accountNumber}</h3>
                    {/* //gives a line */}
                    <hr />
                </div>
            </div>
                <div className="row">
                    {/* <RenderAccount account={props.selectedAccount} /> */}
                    <RenderAccount account={props.account} />
                </div>
            </div>
        )
    }

    else {
        // console.log("account == null");
        return (
            <div></div>
        )
    }
}

export default AccountDetail;