// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService {

//   constructor() { }
// }


import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const categraies = [
            { id: 1, cat_id: 1, parent_id: 0, deviceTypeID: 0, cat_name: 'Security', intro: 'Home Security' },
            { id: 2, cat_id: 2, parent_id: 0, deviceTypeID: 0, cat_name: 'Energy', intro: 'Energy Efficiency' },
            { id: 3, cat_id: 3, parent_id: 0, deviceTypeID: 0, cat_name: 'Entertainment', intro: 'Entertainment' },
            { id: 4, cat_id: 4, parent_id: 0, deviceTypeID: 0, cat_name: 'Water Efficiency', intro: 'Water Efficiency' },
            { id: 5, cat_id: 5, parent_id: 0, deviceTypeID: 0, cat_name: 'Air Quality', intro: 'Air Quality' },

            { id: 11, cat_id: 11, parent_id: 1, deviceTypeID: 1, cat_name: 'Door Lock', intro: 'Door Lock' },
            { id: 12, cat_id: 12, parent_id: 1, deviceTypeID: 2, cat_name: 'Garage Lock', intro: 'Garage Lock' },

            { id: 21, cat_id: 21, parent_id: 2, deviceTypeID: 3, cat_name: 'Switch', intro: 'Switch' },
            { id: 22, cat_id: 22, parent_id: 2, deviceTypeID: 4, cat_name: 'Outlet', intro: 'Outlet' },
            { id: 23, cat_id: 23, parent_id: 2, deviceTypeID: 5, cat_name: 'Detector',   intro: 'Motion detector' },
            { id: 24, cat_id: 24, parent_id: 2, deviceTypeID: 9, cat_name: 'V_Switch', intro: 'Virtual SW' },
            { id: 25, cat_id: 25, parent_id: 2, deviceTypeID: 11, cat_name: 'V_Outlet', intro: 'Virtual Outlet' },

            { id: 31, cat_id: 31, parent_id: 3, deviceTypeID: 6, cat_name: 'Speaker', intro: 'Speaker' },
            { id: 32, cat_id: 32, parent_id: 3, deviceTypeID: 10, cat_name: 'V_Speaker', intro: 'V Speaker' },

            { id: 41, cat_id: 41, parent_id: 4, deviceTypeID: 7, cat_name: 'Water Efficiency', intro: 'Water' },

            { id: 51, cat_id: 51, parent_id: 5, deviceTypeID: 8, cat_name: 'Air Quality', intro: 'Somke' },
        ];

        const deviceTypes = [
            { id: 1, cat_id: 1, parent_id: 1, cat_name: 'Door_Lock',   intro: 'Door Lock',   img_on: 'assets/imgs/doorLock_on.png',  img_off: 'assets/imgs/doorLock_off.png' },
            { id: 2, cat_id: 2, parent_id: 1, cat_name: 'Garage_Lock', intro: 'Garage Lock', img_on: 'assets/imgs/garageLock_on.png',  img_off: 'assets/imgs/garageLock_off.png' },

            { id: 3, cat_id: 3, parent_id: 2, cat_name: 'Switch', intro: 'Switch',          img_on: 'assets/imgs/switch_on.png',  img_off: 'assets/imgs/switch_off.png' },
            { id: 4, cat_id: 4, parent_id: 2, cat_name: 'Outlet', intro: 'Outlet',          img_on: 'assets/imgs/outlet.png',  img_off: 'assets/imgs/outlet.png' },
            { id: 5, cat_id: 5, parent_id: 2, cat_name: 'Lamp', intro: 'Motion detector',   img_on: 'assets/imgs/detector.png',  img_off: 'assets/imgs/detector.png' },
            { id: 6, cat_id: 6, parent_id: 3, cat_name: 'Speaker', intro: 'Speaker',        img_on: 'assets/imgs/speaker.png',  img_off: 'assets/imgs/speaker.png' },

            { id: 7, cat_id: 7, parent_id: 4, cat_name: 'Water', intro: 'Water',            img_on: 'assets/imgs/waterDevice.png',  img_off: 'assets/imgs/waterDevice.png' },
            { id: 8, cat_id: 8, parent_id: 5, cat_name: 'Smoke', intro: 'Smoke',            img_on: 'assets/imgs/smoke.png',  img_off: 'assets/imgs/smoke.png' },
            { id: 9, cat_id: 9, parent_id: 2, cat_name:   'Virtual_SW', intro: 'Combination Switch',        img_on: 'assets/imgs/Vswitches_on.png',  img_off: 'assets/imgs/Vswitches_off.png' },
            { id: 10, cat_id: 10, parent_id: 3, cat_name: 'Virtual_Speaker', intro: 'Combination Speaker',  img_on: 'assets/imgs/V_Speaker_on.png',  img_off: 'assets/imgs/V_Speaker_off.png' },
            { id: 11, cat_id: 11, parent_id: 2, cat_name: 'Virtual_Outlet', intro: 'Combination Outlet',    img_on: 'assets/imgs/V_Outlet_on.png',  img_off: 'assets/imgs/V_Outlet_off.png' },
        ];

        const goods = [
            {
                id: 1, cat_id: 11, goods_id: 1, goods_sn: 'ECS000001', status: 1, goods_name: 'Door Lock1',
                shop_price: 0.01, market_price: 869.60, goods_quantity: 127, sold_quantity: 6, goods_weight: 1.2,
                goods_brief: '', goods_desc: 'iPhone 6s 4.7-inch display',
                thumb_img: 'assets/imgs/doorLock_on.png', goods_img: 'assets/imgs/doorLock_off.png',
                ori_img: 'assets/imgs/6s-3.jpeg', is_on_sale: true, is_delete: true, is_best: true, is_new: false, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 15, 2016 11:13:00')
            },

            {
                id: 2, cat_id: 11, goods_id: 1, goods_sn: 'ECS000001', status: 0, goods_name: 'Door Lock2',
                shop_price: 0.01, market_price: 869.60, goods_quantity: 127, sold_quantity: 6, goods_weight: 1.2,
                goods_brief: '', goods_desc: 'iPhone 6s 4.7-inch display',
                thumb_img: 'assets/imgs/doorLock_on.png', goods_img: 'assets/imgs/doorLock_off.png',
                ori_img: 'assets/imgs/6s-3.jpeg', is_on_sale: true, is_delete: true, is_best: false, is_new: true, is_free_post: true,
                add_time: new Date('October 13, 2015 11:13:00'), last_update: new Date('October 15, 2016 11:13:00')
            },
        ];

        // Like data Table names:
        return {
            categraies,
            deviceTypes,
            goods
        };
    }
}

