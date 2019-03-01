import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resource/1.png';
import avatar from '../resource/avatar.png';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

class Dashboard extends Component {
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-md bg-white navbar-dark">
                    <img 
                    className="navbar-brand"
                    src={Logo}
                    ></img>
                    <h2>Logo</h2>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#menu"
                    >
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-4">
                                <i className="fa fa-bell-o fa-2x"></i>
                                <span className="badge badge-primary badge-notify"> </span>
                            </li>
                            <li className="nav-item ml-4">
                                <i className="fa fa-envelope-o fa-2x"></i>
                                <span className="badge badge-primary badge-notify"> </span>
                            </li>
                            <li
                                className="nav-item mr-3 ml-4 "
                                onClick={this.props.signOut}
                            >
                                <img src={avatar} alt="avatar"/>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row dashboard-bg">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 my-5">
                    <span>Dashboard</span>
                    </div>
                    <Link to="/freehand">
                        <button
                            className="btn-default btn-plus my-5"
                        >
                        <i className="fa fa-plus"></i>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);