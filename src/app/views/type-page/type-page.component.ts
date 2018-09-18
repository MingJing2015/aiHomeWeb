
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { GoodsService } from '../../services/goods.service';
import { Goods, MenuItem } from '../../models/defineClass';
import { DeviceType, Device, Category } from '../../dataClass/defineClass';
import { switchMap } from 'rxjs/operators';
import { CookieService } from 'angular2-cookie/core';
import { ContractService } from '../../services/contract.service';

@Component({
    selector: 'app-type-page',
    templateUrl: './type-page.component.html',
    styleUrls: ['./type-page.component.css'],
    providers: [CookieService]
})

export class TypePageComponent implements AfterContentInit {
    public goodsArray: Array<any>;
    public deviceTypes: Array<DeviceType>;
    public devices: Array<Device>;

    public categories: Array<Category>;
    public menuMyItems: Array<MenuItem>;
    public tabItems: Array<MenuItem>;

    public parameterTab: number;   //  Come from Url

    //  For : route.params.subscribe(params => {}
    private sub: any;

    userLogin: string;
    deviceStatus: boolean; //  string ???

    constructor(private goodsService: GoodsService,
        // private dataService: ProductService,
        private contractService: ContractService,
        private route: ActivatedRoute,
        private router: Router,
        private cookieService: CookieService
    ) {

        this.menuMyItems = new Array();
        this.tabItems = new Array();
    }

    ngAfterContentInit() {

        //  In page by Anchor, URL parameter changed  ... refresh page ..., not reload page
        this.sub = this.route.params.subscribe(params => {

            this.parameterTab = +params['cat_id']; //  (+) converts string 'id' to a number

            console.log('in init, get Param, cat_id = ' + this.parameterTab);

            //  Create Menu Items Array by Category *****
            this.getCategoryThenMenu();

            //  For tab menu;
            this.getCategoryThenTab(this.parameterTab);

            //  Get Goods data for Current Page to show, come from menu by clicked .....................
            switch (this.parameterTab) {

                case 1:  // Home security:
                    this.goodsService.getDeviceTypes_P().then((items) => {
                        this.deviceTypes = items;
                        this.contractService.getDevices()
                            .then((result: any) => {
                                //console.log(result._body);
                                // Home category
                                this.devices = JSON.parse(result._body).filter(device => (
                                    (device.deviceType === 1) || (device.deviceType === 2)));
                                // Show image
                                this.devices.forEach(element => {
                                    if (element.status === '1') {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_on;
                                    } else {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_off;
                                    }
                                });
                            });
                    });
                    break;

                case 2:
                    this.goodsService.getDeviceTypes_P().then((items) => {
                        this.deviceTypes = items;
                        //console.log(this.deviceTypes);
                        this.contractService.getDevices()
                            .then((result: any) => {
                                // Home category
                                this.devices = JSON.parse(result._body).filter(device => (
                                    (device.deviceType === 3) || (device.deviceType === 4) ||
                                    (device.deviceType === 5) || (device.deviceType === 9) ||
                                    (device.deviceType === 11)
                                ));
                                // Show image
                                this.devices.forEach(element => {
                                    if (element.status === '1') {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_on;
                                    } else {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_off;
                                    }
                                });
                            });
                    });
                    break;

                case 3:
                    this.goodsService.getDeviceTypes_P().then((items) => {
                        this.deviceTypes = items;
                        //console.log(this.deviceTypes);
                        this.contractService.getDevices()
                            .then((result: any) => {
                                this.devices = JSON.parse(result._body).filter(device => (
                                    (device.deviceType === 6) || (device.deviceType === 10)));
                                // Show image
                                this.devices.forEach(element => {
                                    if (element.status === '1') {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_on;
                                    } else {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_off;
                                    }
                                });
                            });
                    });
                    break;

                case 4:
                    this.goodsService.getDeviceTypes_P().then((items) => {
                        this.deviceTypes = items;
                        console.log(this.deviceTypes);

                        this.contractService.getDevices()
                            .then((result: any) => {
                                this.devices = JSON.parse(result._body).filter(device => (
                                    (device.deviceType === 7) || (device.deviceType === 7)));
                                // Show image
                                this.devices.forEach(element => {
                                    if (element.status === '1') {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_on;
                                    } else {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_off;
                                    }
                                });
                            });
                    });
                    break;

                case 5:
                    this.goodsService.getDeviceTypes_P().then((items) => {
                        this.deviceTypes = items;
                        //console.log(this.deviceTypes);

                        this.contractService.getDevices()
                            .then((result: any) => {
                                this.devices = JSON.parse(result._body).filter(device => (
                                    (device.deviceType === 8)));
                                // Show image
                                this.devices.forEach(element => {
                                    if (element.status === '1') {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_on;
                                    } else {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_off;
                                    }
                                });
                            });
                    });
                    break;

                default:

                    let  num = +params['cat_id'];
                    //console.log(num);

                    this.goodsService.getDeviceTypes_P().then((items) => {
                        this.deviceTypes = items;
                        // console.log(this.deviceTypes);

                        num = this.getDeviceTypeID_fromCatID(num);
                        //console.log('num:' + num);
                        this.contractService.getDevices()
                            .then((result: any) => {
                                this.devices = JSON.parse(result._body).filter(device => (
                                    (device.deviceType === num)));
                                // Show image
                                this.devices.forEach(element => {
                                    if (element.status === '1') {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_on;
                                    } else {
                                        element.image_on = this.deviceTypes[element.deviceType - 1].img_off;
                                    }
                                });
                            });
                    });
                    break;
            }
        });

        // console.log(" parameterTab cat_id " + this.parameterTab);
    }

    // private ngOnDestroy() {
    //     this.sub.unsubscribe();
    // }

    private getCategory(): Promise<Category[]> {

        return this.goodsService.getCategory()
            .then(categories => this.categories = categories);
    }

    private getDeviceDetails() {

        this.devices.forEach(function (element) {
            element.image_on = 'assets/imgs/doorLock_on.png';
            element.image_off = 'assets/imgs/doorLock_off.png';
        });

        return 0;
    }

    //passes in an id and returns the objects with parent id equal to parameter id
    private getCategoryByID(id: number): Promise<Category[]> {

        return this.goodsService
            .getCategory()
            .then(categories => this.categories = categories.filter(item => item.parent_id === id));
    }

    getDeviceTypeID_fromCatID(id: number): number {
        // console.log('id: ' + id);
        let myid = 1;
        this.categories.forEach(element => {
            // console.log(element.cat_id);
            if (element.cat_id === id) {
                //console.log('return id: ' + element.deviceTypeID);
                myid = element.deviceTypeID;
                return myid; // good
            }
        });
        return myid;
    }

    //  In  then() ,  call a new function ************
    //  private getCategoryThenMenu(): Promise<MenuItem[]> {
    private getCategoryThenMenu(): Promise<void> {
        console.log(this.getCategoryByID(0));
        return this.getCategoryByID(0)
            .then(() => this.createMenuItems());
            //console.log(this.createMenuItems());
    }

    //  In  then() ,  call a new function ************
    private getCategoryThenTab(id: number): Promise<void> {
        //console.log(this.getCategory());
        return this.getCategory()
            .then(() => this.createTabItems(id));
    }

    //  Create Menu string array ..........................
    private createMenuItems() {

        // console.log("createMenuItems Method :  -----------------------");
        this.menuMyItems = [];

        for (let i = 0; i < this.categories.length; i++) {

            //what is the parent_id? how is it set
            if (this.categories[i].parent_id == 0) {

                let t = this.categories[i];
                let item = {
                    id: 'menu' + i,
                    parameterID: i + 1,                //  1,2,3 ....
                    path: '/type-page/type-page/',
                    linkName: t.cat_name,
                    active: '',
                    random: this.getRandomString(i + 1)     //  get random url tail for refresh
                };

                // let random = Math.random();

                if (this.getMenuActiveStatus(t.cat_id)) {

                    item.active = 'active';
                }

                this.menuMyItems.push(item);

                //  console.log(item);
            }
        }
        //console.log(this.menuMyItems);
    }

    getRandomString(len: number) {

        let str = '';

        for (let i = 0; i < len; i++) {
            str += '/1';
        }
        //  console.log(str);

        return str;
    }


    //  Create tab string array ..........................
    private createTabItems(id: number) {
        this.tabItems = [];

        // console.log('create Tab  Items Method :  ##################  ');

        let realID = id;
        let rootMenuNum = 0;

        //  11,12,13 => 1,2,3
        if (id > 10) {
            id = Math.floor(id / 10);
        }

        for (let i = 0; i < this.categories.length; i++) {

            if (this.categories[i].parent_id == id) {

                let t = this.categories[i];
                let item = {
                    id: 'tab' + t.cat_id,
                    parameterID: t.cat_id,    // as cat_id: 101 -100
                    path: '/type-page/type-page/',
                    linkName: t.cat_name,
                    active: '',
                    //  ?? + id , to add length for url ??
                    random: this.getRandomString(this.categories[i].cat_id % 10 + id)     //  get random url tail for refresh: because id is 11,12,13.. so %
                };


                if (this.getTabActiveStatus(t.cat_id)) {
                    item.active = 'active';
                }

                //  **** !!!!
                this.tabItems.push(item);

                //console.log(item);
            }
        }
    }

    private getMenuActiveStatus(id: number) {

        let i = this.parameterTab;

        //  Take case  10 , one grade category can not greator than 10 !!!!!!!!!!!!!!!!!

        if (this.parameterTab >= 10)
            i = Math.floor(this.parameterTab / 10);

        if (i == id)
            return true;
        else
            return false;
    }


    private getTabActiveStatus(id: number) {

        let i = this.parameterTab;

        //  Take case  10 , one grade category can not greator than 10 !!!!!!!!!!!!!!!!!

        if (id < 10)
            return false;  //  By menu selected, show all types , no active

        if (i == id)
            return true;
        else
            return false;
    }

    showGoods() {
        //console.log(this.goodsArray);
    }

    //  TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.goodsArray); }


    // Change Device status
    changeStatus(item: Device): void {
        // console.log(item.id);
        // Change image local !!! because can not refresh !!!
        if (item.status === '1') {
            item.image_on = this.deviceTypes[item.deviceType - 1].img_off;
        } else {
            item.image_on = this.deviceTypes[item.deviceType - 1].img_on;
        }

        this.contractService.setDeviceStatus(item).then((cardBalance) => {    // two are good, but different HTTP
            //console.log(cardBalance.ok);
            if ( cardBalance.ok ) {
                // location.reload();
            }
        });
    }
}
