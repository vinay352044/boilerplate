import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN, LOGOUT } from '../redux/actions/action';
import Header from './Header';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(LOGIN(true));
    };

    const handleLogout = () => {
        dispatch(LOGOUT());
    };

    return (
        <div>
            <Header/>
            This is login page :
            <button onClick={handleLogin}>Login Button</button>
            <button onClick={handleLogout}>Logout Button</button>
        </div>
    );
}

export default Login;
