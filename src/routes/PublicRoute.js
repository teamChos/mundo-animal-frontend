import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    console.log(isAuthenticated)

    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)
            )}
        />
    );
};

PublicRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};