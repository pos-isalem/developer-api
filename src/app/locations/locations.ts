import { PosHttpRequest } from "../../util/pos-http.service";
import { Constants } from "../../util/constant";
import { PosRocketLocationList, PosRocketLocation } from "../../models/POsRocetLocation";
import { DiscountsModule } from "./discount/discounts";

export module LocationsModule {
    export class Location {
        /**
         *
         * @type {DiscountsModule.Discount}
         * @memberof Location
         * @description instance of dicount object in case you wanted to initiate it (short access)
         */
        discounts: DiscountsModule.Discount = new DiscountsModule.Discount();

        /**
         *
         *
         * @returns {Promise<PosRocketLocationList>}
         * @memberof Location
         * @description get all locations existed in the business
         */
        getLocationList(): Promise<PosRocketLocationList> {
            const httpRequestInstance = PosHttpRequest.getInstance();
            return httpRequestInstance.get(Constants.LOCATIONS).then(res => res.data).then(locations => {
                return locations;
            });
        }

        /**
         *
         *
         * @param {string} id location id
         * @returns {Promise<PosRocketLocation>}
         * @memberof Location
         * @description get a specific location information
         */
        getLocationInfo(id: string): Promise<PosRocketLocation> {
            const httpRequestInstance = PosHttpRequest.getInstance();
            return httpRequestInstance.get(Constants.LOCATIONS.concat('/').concat(id)).then(res => res.data.data).then(locations => {
                return locations;
            });
        }
    }

}