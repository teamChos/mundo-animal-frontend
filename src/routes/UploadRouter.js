import React from 'react';
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom';

import { UploadAdoption } from '../components/pages/UploadAdoption';
import { UploadLost } from '../components/pages/UploadLost';

export const UploadRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/adopciones/publicacion' component={UploadAdoption} />
                <Route exact path='/busquedas/publicacion' component={UploadLost} />
                <Redirect to='/' />
            </Switch>
        </>
    );
};
