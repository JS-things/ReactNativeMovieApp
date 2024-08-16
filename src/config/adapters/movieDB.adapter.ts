import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher=new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie/',
    params:{
        api_key:'623051f2d09d4186eedeb1d210c4117e',
        language:'es'
    }
})