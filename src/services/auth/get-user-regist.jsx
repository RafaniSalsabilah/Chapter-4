import https from "../../utils/https";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { useMutation } from "@tanstack/react-query";

const RegisterUser = async (input) => {
    return await https.post(API_ENDPOINT.REGISTER_USER , input);
}

const useCreateUser = () => {
    return useMutation(RegisterUser)
} 

export {RegisterUser , useCreateUser}