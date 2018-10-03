
import { POSRocketApi } from '../src/app';
// import { PosRocketLocationList, PosRocketLocation, PosRocketDiscount, POSRocketTableResponse } from 'src/models';




POSRocketApi.init('Fy6GkmLw4dMDX8rBaARaZGg4yQA8l5');


// POSRocketApi.printMe();

// POSRocketApi.business.getInfo().then(res => {
//     console.log(`\n \n\n\n\nBusiness is \n  ${JSON.stringify(res)} \n \n`);
// });


// POSRocketApi.locations.getLocationList().then((locationList: PosRocketLocationList) => {
//     console.log(`\n \n\n\n\n location is \n ${JSON.stringify(locationList.data)} \n \n`);

//     POSRocketApi.locations.getLocationInfo(locationList.data[0].id).then((location: PosRocketLocation) => {

//         console.log(`\n \n\n\n\n single location request  is \n ${JSON.stringify(location)} \n \n`);

//         POSRocketApi.locations.discounts.getDiscountsList(location.id).then((discountList: POSRocketTableResponse<PosRocketDiscount>) => {
//             console.log(`\n \n\n\n\n Discount List \n ${JSON.stringify(discountList)} \n \n`);
//         })
//     });
// });

