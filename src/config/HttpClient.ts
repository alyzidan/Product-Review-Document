import axios from 'axios';
import EnvVariables from "@/config/Env";

const httpClient = axios.create({ baseURL: EnvVariables.ApiUrl })

httpClient.interceptors.request.use((config) => {
    if (config.headers === undefined) {
        config.headers = {};
    }
    config.headers['Accept'] = 'application/json'
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Accept-Language'] = 'en_US'
    return config
})

export default httpClient
