import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import logo from '../resource/1.png';
import logoScreen from '../resource/zac-ong-394558-unsplash.png';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(props) {
        props.history.push('/dashboard');     
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.signIn(this.state);
    } 
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    render() { 
        const { authError, auth } = this.props;
        return (
            <div className="row no-gutter">
                <div className="col-md-4 login-outline">
                    <form onSubmit={ this.handleSubmit }>
                    <img src={logo}></img>
                    <span><strong>Logo</strong></span>
                    <h1>Sign in to Freehand</h1>
                    <h5>Please enter your credentials to proceed</h5>
                        <div className="form-group">
                            <label>
                                <strong>email address</strong>
                            </label>
                            { authError ? <p>{ authError }</p> : null}
                            <input 
                                className="form-control"
                                type="email" 
                                name="email"
                                placeholder="samplemail@mail.com" 
                                onChange={this.handleChange}
                                noValidate
                            />
                            <div>
                                <label>
                                    <strong>password</strong>
                                </label>
                                <label className="float-right">
                                    Forgot Password?
                                </label>
                            </div>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                onChange={this.handleChange}
                                required
                            >
                            </input>
                            {/* <Link to="/dashboard"> */}
                                <button
                                    type="submit"
                                    className="btn-default sign-in-btn"
                                >
                                <strong>Sign In</strong>
                                </button>
                            {/* </Link> */}
                            <h6>
                                Don't have an account?&nbsp;&nbsp;
                                <Link 
                                    to="/signup"
                                >
                                        Signup
                                </Link>
                            </h6>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 px-0 mx-0 logo-screen">
                    <img src={logoScreen} alt="Logo Screen"/>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);