import axios from "axios";

class AuthenticationService {
    login = async (username, password) => {
            return axios
                .post('http://localhost:8080/authenticate', { username, password })
                .then((response) => {
                    if (response.data.accessToken) {
                        console.log(response.data);
                        localStorage.setItem("user", JSON.stringify(response.data));
                    }
                    return response.data;
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                });
        };


    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             username: username,
    //             password: password
    //         })
    //     };

    //     await fetch('http://localhost:8080/authenticate', requestOptions)
    //         .then((response) => response.json())
    //         .then((content) => {
    //             console.log(content);
    //             if (content != null) {
    //                 const jwt = content.jwt;
    //                 alert(jwt);
    //                 sessionStorage.setItem('jwt', JSON.stringify(jwt));
    //             }
    //             return jwt;
    //         })
    //         .catch((err) => {
    //             console.err(err.message);
    //             throw err;
    //         });
    // };

    signOut() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
    register = async (
        username,
        password,
        firstName,
        middleName,
        lastName,
        ssn
    ) => {
        return axios.post("/createuser", {
            username,
            password,
            firstName,
            middleName,
            lastName,
            ssn,
        });
    };
}

export default new AuthenticationService;
