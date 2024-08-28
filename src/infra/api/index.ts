import axios, { Axios } from "axios";

export const api = axios.create({
    baseURL: ""
})

applyErrorHandler(api);

function applyErrorHandler(api: Axios) {
    api.interceptors.response.use(response => {
        if (response.data.success === false) {
            return Promise.reject(new Error(response.data.message));
        }

        return response
    }, error => {
        return Promise.reject(new Error(error));
    })
}