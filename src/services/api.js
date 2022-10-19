//https://api.themoviedb.org/3/movie/now_playing?api_key=8b5dcf8794289f39c2dfccb16587da65&language=pt-BR
//https://api.themoviedb.org/3

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
export default api;