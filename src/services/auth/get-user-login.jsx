import https from "../../utils/https";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { useMutation } from "@tanstack/react-query";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

const LoginUser = async (input) => {
    return await https
    .post(API_ENDPOINT.LOGIN_USER , input)
    .then((result) => {
        CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token)
    }).catch((err) => {
        alert(err.responses.data.message, 'err')
    });;
}

const useLoginUser = () => {
    return useMutation(LoginUser)
} 

export {LoginUser , useLoginUser}