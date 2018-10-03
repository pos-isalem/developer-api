
import axios from 'axios';
import { PosErrors } from './error';
import { baseUrl } from '../config/enviroment';
/**
 *
 *
 * @export
 * @class PosHttpRequest
 * @description http request gatway to the developer portal api
 */
export class PosHttpRequest {
    
    private static posHttpRequest: PosHttpRequest
    private static headers: Object;
    private constructor(token?: string) {
        if (!token) {
            console.log('you dont have nanyy toke cc');
            throw new Error(PosErrors.httpErrors.INVALID_TOKEN);
        }
        PosHttpRequest.headers = { Authorization: `Bearer ${token}` };
    }


    /**
     *
     *
     * @static
     * @param {string} token
     * @memberof PosHttpRequest
     * @description injecting token inside the header when initializing the api
     */
    static init(token: string) {
        PosHttpRequest.getInstance(token);
    }

    /**
     *
     *
     * @static
     * @param {string} [token]
     * @returns {PosHttpRequest}
     * @memberof PosHttpRequest
     * @description having one instance to handle all the requests
     */
    static getInstance(token?: string): PosHttpRequest {
        return PosHttpRequest.posHttpRequest ? PosHttpRequest.posHttpRequest : (PosHttpRequest.posHttpRequest = new PosHttpRequest(token));
    }


    /**
     *
     *
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof PosHttpRequest
     */
    get(url: string):Promise<any> {
        console.log('header', PosHttpRequest.headers);
        return axios.get(baseUrl + url, { headers: PosHttpRequest.headers });
    }

    /**
     *
     *
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof PosHttpRequest
     */
    post(url: string, data: Object) {
        return axios.post(baseUrl + url, data, { headers: PosHttpRequest.headers });
    }

    /**
     *
     *
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof PosHttpRequest
     */
    put(url: string, data: Object) {
        return axios.put(baseUrl + url, data, { headers: PosHttpRequest.headers });
    }

    /**
     *
     *
     * @param {string} url
     * @returns {Promise<any>}
     * @memberof PosHttpRequest
     */
    delete(url: string) {
        return axios.delete(baseUrl + url, { headers: PosHttpRequest.headers });
    }

}