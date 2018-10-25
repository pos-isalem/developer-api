
import { POSRocketApi } from '../src/app';
import { PosRocketLocationList, PosRocketLocation, POSRocketTableResponse, PosRocketDiscount } from 'src/models';




POSRocketApi.init('5gwg9gywuCYGEcuQPxBY7BkUGllM3s');




POSRocketApi.business.getInfo().then(res => {
    console.log(`\n \n\n\n\nBusiness is \n  ${JSON.stringify(res)} \n \n`, res.name);
}).catch(err => {
    console.log('error of this ', err);
});


POSRocketApi.locations.getLocationList().then((locationList: PosRocketLocationList) => {
    console.log(`\n \n\n\n\n location is \n ${JSON.stringify(locationList.data)} \n \n`);

    POSRocketApi.locations.getLocationInfo(locationList.data[0].id).then((location: PosRocketLocation) => {

        console.log(`\n \n\n\n\n single location request  is \n ${JSON.stringify(location)} \n \n`);

        POSRocketApi.locations.discounts.getDiscountsList(location.id).then((discountList: POSRocketTableResponse<PosRocketDiscount>) => {
            console.log(`\n \n\n\n\n Discount List \n ${JSON.stringify(discountList)} \n \n`);
        })
    });
});

