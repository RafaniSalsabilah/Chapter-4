import axios from "axios"
import { CookiesStorage, CookiesKey } from '../utils/cookies'

const https3 = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BINAR,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

https3.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${CookiesStorage.get(CookiesKey.AuthToken) ? CookiesStorage.get(CookiesKey.AuthToken) : ""}`,
    };
    return config;
});

export default https3;