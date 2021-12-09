const baseUrl = 'https://mundo-animal-restserver.herokuapp.com';
const localUrl = 'http://localhost:5000';

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    
    if(method === 'GET'){
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };
    
};

const fetchConToken = (endpoint, data, method = 'GET') => {
    const url = `${localUrl}/${endpoint}`;

    const token = localStorage.getItem('token') || '';
    
    if(method === 'GET'){
        return fetch(url, {
            method,
            headers: {
                'x-token': token,
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'x-token': token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };
};

const fetchConTokenFiles = (endpoint, data, method = 'GET') => {
    const url = `${localUrl}/${endpoint}`;

    const token = localStorage.getItem('token') || '';
    
    return fetch(url, {
        method,
        headers: {
            'x-token': token,
        },
        body: data,
        redirect: 'follow'
    });

};

export {
    fetchSinToken,
    fetchConToken,
    fetchConTokenFiles
}