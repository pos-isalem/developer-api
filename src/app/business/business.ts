import { POSRocketBusiness } from "../../models";
import { PosHttpRequest } from "../../util/pos-http.service";
import { Constants } from "../../util/constant";

export module BusinessModule {
    /**
     * @export
     * @class Business
     * @description getting Business data
     */
    export class Business {


        /**
         * @returns {Promise<POSRocketBusiness>}
         * @memberof Business
         * @description get business information
         */
        getInfo(): Promise<POSRocketBusiness> {
            const httpRequestInstance = PosHttpRequest.getInstance();
            return httpRequestInstance.get(Constants.BUSINESS).then(res => res.data).then(business => {
                return business;
            });
        }
    }

}