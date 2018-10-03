import { POSRocketTableResponse } from "../../../models/POSRocketTableResponse";
import { PosRocketDiscount } from "../../../models/POSRocketDiscounts";
import { PosHttpRequest } from "../../../util/pos-http.service";
import { Constants } from "../../../util/constant";

export module DiscountsModule {

    /**
     *
     *
     * @export
     * @class Discount
     * @description handle all the discount business here
     */
    export class Discount {

        /**
         *
         *
         * @param {string} id location id
         * @returns {Promise<POSRocketTableResponse<PosRocketDiscount>>}
         * @memberof Discount
         * @description get all discounts for a specific location 
         */
        getDiscountsList(id: string): Promise<POSRocketTableResponse<PosRocketDiscount>> {
            const httpRequestInstance = PosHttpRequest.getInstance();
            console.log('id is ', id);
            return httpRequestInstance.get(Constants.LOCATIONS.concat('/').concat(id).concat('/').concat(Constants.DISCOUNTS)).then(res => res.data).then(locations => {
                return locations;
            });
        }


        /**
         *
         *
         * @param {string} id discount id
         * @returns {Promise<PosRocketDiscount>}
         * @memberof Discount
         * @description get single discount data 
         */
        getLocationDiscountInfo(id: string): Promise<PosRocketDiscount> {
            const httpRequestInstance = PosHttpRequest.getInstance();
            return httpRequestInstance.get(Constants.LOCATIONS.concat('/').concat(id)).then(res => res.data).then(locations => {
                return locations;
            });
        }
    }

}