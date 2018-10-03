import { PosHttpRequest } from "../../util/pos-http.service";
import { Constants } from "../../util/constant";
import { PosRocketLocationList, PosRocketLocation } from "../../models/POsRocetLocation";
import { DiscountsModule } from "./discount/discounts";

export module LocationsModule {
    export class Location {
        discounts: DiscountsModule.Discount = new DiscountsModule.Discount();
        getLocationList(): Promise<PosRocketLocationList> {
            const httpRequestInstance = PosHttpRequest.getInstance();
            return httpRequestInstance.get(Constants.LOCATIONS).then(res => res.data).then(locations => {
                return locations;
            });
        }
        getLocationInfo(id: string): Promise<PosRocketLocation> {
            const httpRequestInstance = PosHttpRequest.getInstance();
            return httpRequestInstance.get(Constants.LOCATIONS.concat('/').concat(id)).then(res => res.data.data).then(locations => {
                return locations;
            });
        }
    }

}