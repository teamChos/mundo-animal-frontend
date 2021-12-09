import { fetchConToken, fetchSinToken } from "../helpers/fetch";

const startLogin = async(values, dispatch) => {
    const resp = await fetchSinToken('auth/login', values, 'POST');
    const body = await resp.json();
    
    if(body.ok){
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch({
            type: '[auth] Login',
            payload: body.usuario
        });
    } else {
        console.log(body.msg);
    }
};

const startRegister = async(values, dispatch) => {
    const resp = await fetchSinToken('usuario/registrar', values, 'POST');
    const body = await resp.json();

    if(body.ok){
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch({
            type: '[auth] Login',
            payload: body.usuario
        });
    } else {
        console.log(body.msg);
    };
};

const startChecking = async(dispatch) => {
    const resp = await fetchConToken('auth/renew');
    const body = await resp.json();
    
    if(body.ok){
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch({
            type: '[auth] Login',
            payload: body.usuario
        });
    } else {
        console.log(body.msg);

        dispatch({
            type: '[auth] Finish cheking login state'
        });
    }
}

const startLogout = (dispatch) => {
    localStorage.clear();
    dispatch({
        type: '[auth] Logout'
    })
}

export {
    startLogin,
    startRegister,
    startChecking,
    startLogout
};