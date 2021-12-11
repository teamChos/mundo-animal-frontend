import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import { DashboardRouter } from './DashboardRouter';
import { AuthRouter } from './AuthRouter';
import { AuthContext } from '../auth/AuthContext';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Spinner } from 'react-bootstrap';

export const AppRouter = () => {

    const { state: { checking, uid }, dispatch } = useContext(AuthContext);

    useEffect(() => {
        startChecking(dispatch);
    }, [dispatch])

    if (checking) {
        return (
            <div className="position-absolute top-50 start-50 translate-middle">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <div className='container'>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            component={AuthRouter}
                            isAuthenticated={!!uid}
                        />
                        <PrivateRoute
                            path="/"
                            component={DashboardRouter}
                            isAuthenticated={!!uid}
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};