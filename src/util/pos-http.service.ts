
import axios from 'axios';
import { PosErrors } from './error';
import { baseUrl } from '../config/enviroment';

export class PosHttpRequest {
    private static posHttpRequest: PosHttpRequest
    private static headers: Object;
    private constructor(token?: string) {
        if (!token) {
            throw new Error(PosErrors.httpErrors.INVALID_TOKEN);
        }
        PosHttpRequest.headers = { Authorization: `Bearer ${token}` };
    }
    static init(token: string) {
        PosHttpRequest.getInstance(token);
    }
    static getInstance(token?: string): PosHttpRequest {
        return PosHttpRequest.posHttpRequest ? PosHttpRequest.posHttpRequest : (PosHttpRequest.posHttpRequest = new PosHttpRequest(token));
    }
    get(url: string) {
        console.log('header', PosHttpRequest.headers);
        return axios.get(baseUrl + url, { headers: PosHttpRequest.headers });
    }

    post(url: string, data: Object) {
        return axios.post(baseUrl + url, data, { headers: PosHttpRequest.headers });
    }

    put(url: string, data: Object) {
        return axios.put(baseUrl + url, data, { headers: PosHttpRequest.headers });
    }

    delete(url: string) {
        return axios.delete(baseUrl + url, { headers: PosHttpRequest.headers });
    }

}


// h94zhlyslxHAw3h15AHPANQfzduPYz