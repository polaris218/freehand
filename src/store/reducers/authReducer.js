const initState = {
    authError: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            this.props.history.push('/dashboard');
            return {
                ...state,
                authError: null,
            }
        case 'LOGIN_FAILED' :
            console.log('Login Failed');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup_success');
            this.props.history.push('/dashboard');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_FAILED':
            console.log('signup_error');
            return {
                ...state,
                authError: action.err.message,
            }
        case 'SINGOUT_SUCCESS':
            console.log('Signout Success');
            return state;
        default:
            return state;
    }
}

export default authReducer;