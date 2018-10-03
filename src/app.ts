import { PosHttpRequest } from "./util/pos-http.service";
import { BusinessModule } from "./app/business";
import { LocationsModule } from "./app/locations/locations";
import { DiscountsModule } from "./app/locations/discount/discounts";
import "zone.js";

// const timer = 0;
const myZone = Zone.current.fork({
    name: 'zoneee',
    // onScheduleTask(delegate, currentZone, targetZone, task) {
    //     const result = delegate.scheduleTask(targetZone, task);
    //     const name = task.callback.name;
    //     console.log(
    //         Date.now() - timer,
    //         `task with callback '${name}' is added to the task queue`
    //     );
    //     return result;
    // },
    // onInvokeTask(delegate, currentZone, targetZone, task, ...args) {
    //     const result = delegate.invokeTask(targetZone, task, ...args);
    //     const name = task.callback.name;
    //     console.log(
    //         Date.now() - timer,
    //         `task with callback '${name}' is removed from the task queue`
    //     );
    //     return result;
    // },
    onInvoke(delegate, current, target, callback, ...args) {
        console.log(` \n\n\n\n entering zone '${target.name}' Executed before the the function executed \n\n\n\n`);
        return delegate.invoke(target, callback, ...args);
    }

});
export module POSRocketApi {

    export const business = new BusinessModule.Business();
    export const locations = new LocationsModule.Location();
    export const discounts = new DiscountsModule.Discount();
    export const init = (token: string) => {
        // const msg = 'Hello  +++---   Ihab';
        // console.log(msg);
        PosHttpRequest.init(token);
        return true;
    }

    export const printMe2 = function () {
        // setTimeout(() => {
        //     console.log('in side tome out');

        // }, 0);
        console.log('\n\n\n\\nggrtgrtgtrgrgtrtgrrt');
    }

    export const printMe = function () {
        // setTimeout(() => {
        //     console.log('in side tome out');

        // }, 0);
        console.log('\n\n\n\n Print ME Called inside Zone \n\n\n\n');
    }
}
myZone.wrap(POSRocketApi.printMe, 'zoneee');
// Zone.r
// myZone.scheduleEventTask('zoneee', POSRocketApi.printMe2, {},(myZone.scheduleEventTask('zoneee', POSRocketApi.printMe2, ));

myZone.run(POSRocketApi.printMe, 'zoneee');
// myZone.wrap
// myZone.(POSRocketApi.business.getInfo);