export class   Goods {
    constructor(
        public id:             number,
        public cat_id:         number,
        public goods_id:       number,
        public goods_sn:       string,

        public brand_id:       number,
        // public deviceStatus:   boolean,

        public goods_name:     string,
        public shop_price:     number,
        public market_price:   number,
        public goods_quantity:   number,
        public sold_quantity:    number,
        public goods_weight:   number,
        public goods_brief:    string,
        public goods_desc:     string,
        public thumb_img:      string,
        public goods_img:      string,
        public ori_img:        string,
        public is_on_sale:     boolean,
        public is_delete:      boolean,
        public is_best:        boolean,
        public is_new:         boolean,  // use for device status value !!!
        public is_free_post:   boolean,
        public add_time:       Date,
        public last_update:    Date) {}
}


// copy from dataClass - defineClass.ts

export class  Category {
    constructor(
        public id:   number,
        public cat_id:   number,
        public parent_id:   number,
        public deviceTypeID: number,
        public cat_name:   string,
        public intro:   string

    ){}
}

export class MenuItem {
    parameterID: number;
    path: string;
    linkName: string;
    active: string;
    random: string;
}


export class   DeviceType {
    constructor(
        public id:          number,
        public cat_id:      number,
        public parent_id:   number,
        public cat_name:    string,
        public img_on:      string,
        public img_off:     string,
        public intro:       string) {}
}

export class   Device {
    constructor(
        public id:          number,
        public name:        string,
        public image_on:    string,
        public image_off:   string,
        public x:           number,
        public y:           number,
        public floorNumber: number,
        public deviceType:  number,
        public channel:     number,
        public status:      string) {}
}

export class   CartItem {
    constructor(
        public id:          number,
        public goods_id:    number,
        public goods_name:  string,
        public shop_price:  number,
        public quantity:    number) {}
}


export class PwdChangeStatusModel {
    _body: string;
    status: number;
    statusText: string;
}
