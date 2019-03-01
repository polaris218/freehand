import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import logo from '../resource/1.png';
import logoScreen from '../resource/zac-ong-394558-unsplash.png';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(props) {
        console.log(props);
        props.history.push('/dashboard');
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.signUp(this.state);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        
    }
    render() { 
        const { auth, authError } = this.props
        return ( 
            <div className="row no-gutter">
                <div className="col-md-4 login-outline">
                    <img src={logo} alt="Logo"></img>
                    <span><strong>Logo</strong></span>
                    <h1>Get Started for free</h1>
                    <h5>Free forever. No Credit card needed.</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                <strong>full name</strong>
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                className="form-control"
                                placeholder="Anna Black"
                                onChange={this.handleChange}
                                required
                            />
                            <label>
                                <strong>email address</strong>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="samplemail@mail.com"
                                onChange={this.handleChange}
                                required
                            />
                            <label>
                                <strong>password</strong>
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={this.handleChange}
                                required
                            />
                            <div className="usage-terms text-center">
                                <small>
                                    <strong>
                                        By clicking Create Account, you agree to our usage terms
                                    </strong>
                                </small>
                            </div>
                            
                            <button
                                type="submit"
                                className="btn-default sign-in-btn"
                            >
                                <strong>Create Account</strong>
                            </button>
                            <h6>
                                Already have an account?&nbsp;&nbsp;
                                <Link 
                                    to="/login"
                                >
                                    Sign In
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
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: newUser => dispatch(signUp(newUser)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Signup);