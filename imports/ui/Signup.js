import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            error: ''
        };

    }

    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if (password.length < 8) {
            return this.setState({
                error: 'Password must be more than 8 characters long'
            })
        }
        
        Accounts.createUser({email: email, password: password},
            (err) => {
               if (err) {
                   console.log(err);
                   
                this.setState({
                    error: err.reason
                })
               } else {
                this.setState({error: ''})
               }
            }
        )
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                <h1>Sign up now!</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form className="boxed-view__form" onSubmit={this.onSubmit}>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <button className="button">Create Account</button>
                </form>
                <Link to="/">Already have an account?</Link>
                </div>

            </div>
        )
    }
}
