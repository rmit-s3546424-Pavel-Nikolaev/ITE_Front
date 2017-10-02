import React, {Component} from 'react';
import {Config as AWSConfig, CognitoIdentityCredentials} from 'aws-sdk';
import {CognitoUserPool, CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import {Redirect} from 'react-router-dom';
import {clearMsg, showMsg} from './utils/utilities';
import settings from './utils/config';

AWSConfig.region = settings.region;
AWSConfig.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: settings.IdentityPoolId
});

const pool = new CognitoUserPool({
    UserPoolId: settings.UserPoolId,
    ClientId: settings.ClientId,
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            loading: false
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        document.getElementById("totalProg").style.visibility = "hidden";
        document.getElementById("loadingMessage").style.visibility = "hidden";
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    onLogin(event) {
        event.preventDefault();
        const email = this.state.email.trim();
        const password = this.state.password.trim();
        const credentials = new AuthenticationDetails({
            Username: email,
            Password: password,
        });
        this.setState({
            loading: true
        });
        const cognitoUser = new CognitoUser({Username: email, Pool: pool});
        cognitoUser.authenticateUser(credentials, {
            onSuccess: (session) => {
                localStorage.setItem("session", session.idToken.jwtToken);
                this.setState({isAuthenticated: true, loading: false});
            },
            onFailure: (error) => {
                const errors = document.getElementById("errorDiv");
                clearMsg();
                errors.insertAdjacentHTML("beforeend", "<p class='errorMsg'>" + error.message + "</p>");
                showMsg();
                console.log(error);
                this.setState({isAuthenticated: false, loading: false});
            },
            newPasswordRequired: (userAttributes, requiredAttributes) => {
                delete userAttributes.email_verified;
                // FIXME. Probably should handle this properly.
                cognitoUser.completeNewPasswordChallenge(password, userAttributes, this);
            }
        });
    }

    render() {
        if (this.state.loading) {
            document.getElementById("root").className = "blur";
            document.getElementById('loader').className = "loader";
            document.getElementById("loadingScreen").style.visibility = "visible";
        }
        else {
            document.getElementById("root").className = "";
            document.getElementById('loader').className = "";
            document.getElementById("loadingScreen").style.visibility = "hidden";
        }
        if (this.state.isAuthenticated) {
            return <Redirect to="/"/>;
        }
        return (
            <div id="login_container">
                <div>
                    <h1>Log in to Tabs</h1>
                    <form id="login" onSubmit={this.onLogin}>
                        <div className="input icon">
                            <input id="email"
                                   className="field"
                                   type="email"
                                   value={this.state.email}
                                   onChange={this.onEmailChange}
                                   placeholder="Email"/>
                            <i></i>
                        </div>
                        <div className="input icon">
                            <input id="password"
                                   className="field"
                                   type="password"
                                   value={this.state.password}
                                   onChange={this.onPasswordChange}
                                   placeholder="Password"/>
                            <i></i>
                        </div>
                        <div className="input">
                            <input className="button" value="Login" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;