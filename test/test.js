// import {  } from '../dist/app';
const POSRocketApi = require('../dist/src').POSRocketApi;



POSRocketApi.init('I4cXgIAlwtdjOzZ9T9hAJxm4cyYQsY');

POSRocketApi.business.getInfo().then((res) => {
    console.log(`\n \n\n\n\nBusiness is \n  ${JSON.stringify(res)} \n \n`);
});

POSRocketApi.locations.getLocationList().then(locatinList => {
    console.log(`\n \n\n\n\   ===locations is \n  ${JSON.stringify(locatinList)} \n \n`);
    POSRocketApi.locations.getLocationInfo(locatinList.data[0].id).then(locationInfo => {
        console.log(`\n \n\n\n\   single locations is \n  ${JSON.stringify(locationInfo)} \n \n`);
        POSRocketApi.locations.discounts.getDiscountsList(locationInfo.id).then(discountList => {
            console.log(`\n \n\n\n\   Discount List is \n  ${JSON.stringify(discountList)} \n \n`);
        });
    });
});