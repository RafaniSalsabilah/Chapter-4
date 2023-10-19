import https3 from '../../utils/https3'
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '../../utils/api-endpoints';

const fetchUser = async ({ queryKey }) => {
    const [_key] = queryKey;
    const { data } = await https3
    .get(_key)
    .then((value) => {
        return value
    }).catch((err) => {
        if (err.response.status === 401) {
            window.location.href = '/login'
        }
    })
    return data
}

const useUserDataQuery = (options) => {
    return useQuery([API_ENDPOINT.GET_ME, options], fetchUser)
}

export { fetchUser, useUserDataQuery }
