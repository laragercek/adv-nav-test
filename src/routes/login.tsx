import {useIsLoggedIn} from "../hooks";
import {ChangeEvent, useCallback, useReducer} from "react";
import "../styles/login.css";
import { Navigate } from "react-router-dom";

const initialFieldState = {login: '', password: ''};
type FieldsState = typeof initialFieldState
const fieldReducer = (state: FieldsState, {key, value}: { key: keyof FieldsState, value: string }) => {
    return {...state, [key]: value};
}

export const Login = () => {
    const {onLogIn, isSignedIn} = useIsLoggedIn();

    const [{login, password}, dispatch] = useReducer(fieldReducer, initialFieldState);

    const handleSignIn = useCallback(() => {
        if (login === 'admin' && password ==='password') {
            onLogIn();
        }
        
    }, [ login, password, onLogIn]);
    
    const handleChange = useCallback((key: keyof FieldsState) => (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        dispatch({key, value})
    }, [dispatch]);

    if(isSignedIn) {
        return <Navigate to="/home"/>
    }
    
    return <div className="login-page">
        <div className="form">
        <form className="login-form">
        <input type="text" placeholder="username" value={login}
            onChange={handleChange('login')}/>
        <input type="password" placeholder="password" value={password}
            onChange={handleChange('password')} />
        <button onClick={handleSignIn}>Login</button>
        </form>
        </div>
    </div>
}