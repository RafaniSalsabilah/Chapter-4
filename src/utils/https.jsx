import axios from "axios"

const https = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BINAR,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_KEY_BINAR}`,
    }
})

export default https;