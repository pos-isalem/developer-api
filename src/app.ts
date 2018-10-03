import { PosHttpRequest } from "./util/pos-http.service";
import { BusinessModule } from "./app/business";
import { LocationsModule } from "./app/locations/locations";

export module POSRocketApi{

    export const business = new BusinessModule.Business();
    export const locations = new LocationsModule.Location();
    export const init = (token: string) => {
        const msg = 'Hello  +++---   Ihab';
        console.log(msg);
        PosHttpRequest.init(token);
        return true;
    }
}
