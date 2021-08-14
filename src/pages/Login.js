import React, { Component } from 'react';
// import '../css/Form.css';
import { Container, Alert } from 'reactstrap';
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
// import AuthenticationService from '.././services/AuthenticationService';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: ""
        };
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    doLogin = async (event) => {
        event.preventDefault();

        //     AuthenticationService
        //         .login(this.state.username, this.state.password)
        //         .then(
        //             () => {this.props.history.push('/user');
        //             window.location.reload();
        //         },
        //         error => {
        //             console.log("Login fail: error = { " + error.toString() + " }");
        //             this.setState({error: "Cannot login. Please check username or password."});
        //         }
        //     );


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        };

        console.log(requestOptions.username);
        console.log(requestOptions.password);

        await fetch('http://localhost:8080/authenticate', requestOptions)
            .then((response) => response.json())
            .then((content) => {
                console.log(content);
                if (content != null) {
                    const jwt = content.jwt;
                    alert(jwt);
                    sessionStorage.setItem('jwt', JSON.stringify(jwt));
                }
                // return jwt;
            })
            .catch((err) => {
                console.err(err.message);
                throw err;
            });
    };

    render() {
        return (

            <div className="container">
                <div className="row row-header">
                     <div className="col-12 col-sm-6">
                     <main className="form-signin">
                        <h2>
                            Welcome
                        </h2>
                        <Form onSubmit={this.doLogin}>
                            <FormGroup controlId="forUsername" className="form-inputs">
                                <Input autoFocus
                                    type="text"
                                    name="username" id="username"
                                    value={this.state.username}
                                    placeholder="Enter your username" required
                                    autoComplete="username"
                                    onChange={this.changeHandler}
                                />
                            </FormGroup>

                            <FormGroup controlId="formPassword" className="form-inputs">
                                <Input type="password"
                                    name="password" id="password"
                                    value={this.state.password}
                                    placeholder="Enter your password" required
                                    // autoComplete="password"
                                    onChange={this.changeHandler}
                                />
                            </FormGroup>

                            <Button type="submit" variant="primary" block>
                                Login
                            </Button>
                            {
                                this.state.error && (
                                    <Alert color="danger">
                                        {this.state.error}
                                    </Alert>
                                )
                            }
                        </Form>
                        <span className='form-input-login'>
                            Don't have an account? Sign up now <a href='/signup'>here</a>
                        </span>
                        </main>
                    </div>
                </div>
            </div>
        );
    }


    // return (
    //     <div className="container">
    //         <div className="row row-header">
    //             <div className="col-12 col-sm-6">
    //                 <main className="form-signin">
    //                     <form onSubmit={this.doLogin}>
    //                         <h1 className="h3 mb-3 fw-normal">Welcome</h1>
    //                         <input type="text" className="form-control" value={this.state.username} placeholder="Enter Username" required
    //                            onChange={this.changeHandler}
    //                         />

    //                         <input type="password" className="form-control" value={this.state.password} placeholder="Enter Password" required
    //                             onChange={this.changeHandler}
    //                         />
    //                         <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    //                     </form>
    //                 </main>
    //             </div>
    //         </div>
    //     </div>
    // )
    // }
}

export default Login