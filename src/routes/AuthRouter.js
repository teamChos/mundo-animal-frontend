import React from 'react';
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/auth/login' component={Login} />
                <Route exact path='/auth/registro' component={Register} />

                <Redirect to='/auth/login' />
            </Switch>
        </div>
    );
};
