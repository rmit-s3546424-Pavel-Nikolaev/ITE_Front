import React, { Component } from 'react';
import { Config as AWSConfig, CognitoIdentityCredentials } from 'aws-sdk';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { Redirect } from 'react-router-dom';

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
            redirect: false
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    onLogin(event) {
        event.preventDefault();
        const email = this.state.email.trim();
        const password = this.state.password.trim();
        const credentials = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        const cognitoUser = new CognitoUser({ Username: email, Pool: pool });
        cognitoUser.authenticateUser(credentials, {
            onSuccess: (session) => {
                localStorage.setItem("session", JSON.stringify(session));
                this.setState({ redirect: true });
            },
            onFailure: (error) => {
                console.log(error);
            },
            newPasswordRequired: (userAttributes, requiredAttributes) => {
                delete userAttributes.email_verified;
                // FIXME. Probably should handle this properly.
                cognitoUser.completeNewPasswordChallenge(password, userAttributes, this);
            }
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }

        return (
            <div id="login_container">
                <h1>Log in to Tabs</h1>
                <form id="login" onSubmit={this.onLogin}>
                    <div className="input icon">
                        <input id="email"
                            className="field"
                            type="email"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            placeholder="Email" />
                        <i></i>
                    </div>
                    <div className="input icon">
                        <input id="password"
                            className="field"
                            type="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            placeholder="Password" />
                        <i></i>
                    </div>
                    <div className="input">
                        <input className="button" value="Login" type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;