import { useState } from "react";
import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";

// const Login = (props: {setFirstName: (firstName: string) => void }) => { 
// class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             redirect: false
//         }
//     }

    const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [logedin, setLogedin] = useState(false);

    

        const submit = async (e) => {
            e.preventDefault();

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // credentials: 'include', //for cookies
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            };

            const response = await fetch('http://localhost:8080/authenticate', requestOptions);
            const content = await response.json();
            // if(content != null){
                const token = content.jwt;
                alert(token);
                sessionStorage.setItem('jwt', JSON.stringify(token));
                //props.setLogedin(true);
                // props.setStateOfMain(true);

            // }
            

            let url = 'http://localhost:8080/Me';
            const h = new Headers();
            h.append('Authorization', 'Bearer ' + token);

            const requestOptions1 = {
                method: 'GET',
                mode: 'cors',
                headers: h,
            };

            const a = await fetch(new Request(url, requestOptions1))
                .then((response) => response.json())
                .then((content) => {
                    console.log(content);
                })
                .catch(err => {
                    console.error(err.message);
                })

            setRedirect(true);
            // setFirstName(content.firstName);
        }

        if (redirect) {
            return <Redirect to='/home' />
        }

        // window.location = '/home';
        // // <Redirect to="/home" />

        return (
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <main className="form-signin">
                            <form onSubmit={submit}>
                                <h1 className="h3 mb-3 fw-normal">Welcome</h1>
                                <input type="text" className="form-control" placeholder="Username" required
                                    onChange={e => setUsername(e.target.value)}
                                />

                                <input type="password" className="form-control" placeholder="Password" required
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        )
    }


    export default Login