import { fetchSinToken, fetchConToken, fetchConTokenFiles } from "./fetch";


export const getPublicaciones = async (endpoint) => {
    const resp = await fetchSinToken(endpoint);
    const body = await resp.json();

    return body;

};

export const postPublicaciones = async (endpoint, values) => {
    const resp = await fetchConToken(endpoint, values, 'POST');
    const body = await resp.json();

    return body;

};

export const postImage = async (endpoint, values) => {
    const resp = await fetchConTokenFiles(endpoint, values, 'POST');
    const body = await resp.json();

    return body;

};