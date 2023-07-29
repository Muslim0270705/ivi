import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {"X-API-KEY": "D56H2G2-KR94R05-J8YNP0B-RG3WGYN"}
})

export default instance