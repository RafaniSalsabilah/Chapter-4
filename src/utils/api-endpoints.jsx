export const API_ENDPOINT = {
    NOW_PLAYING : 'movie/now_playing',
    POPULAR : 'movie/popular',
    BACKGROUND : (bg) => `https://image.tmdb.org/t/p/original/${bg}`,
    MOVIE_DETAIL : (id) => `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    REGISTER_USER : '/api/v1/auth/register',
    LOGIN_USER : '/api/v1/auth/login',
    GET_ME : '/api/v1/auth/me'
}