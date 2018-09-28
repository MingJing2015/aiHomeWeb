import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router, NavigationEnd } from '@angular/router';

import { DeviceType, DeviceTypeMySQL, Device, Floor, Category } from '../../models/defineClass';
import { AihomeService } from '../../services/aihome.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [CookieService]
})
export class DashboardComponent implements OnInit {

    cookieService: CookieService;

    public floors: Array<Floor>;
    public devices: Array<Device>;
    public deviceTypes: Array<DeviceTypeMySQL>;

    curFloorNum;
    curButtonNum;
    mainDiv;
    imgTesting;

    constructor(_cookieService: CookieService,
        private aihomeService: AihomeService,
        private router: Router
    ) {
        // this.cookieService = _cookieService;
    }

    CreateDelegate(contextObject, delegateMethod) {
        return function () {
            return delegateMethod.apply(contextObject, arguments);
        };
    }

    imgTesting_onload() {
        // alert(this.width + ' by ' + this.height);
        // this.mainDiv.style.height = 950;
        // this.mainDiv.style.width = 1500;
    }

    ngOnInit(): void {

        /* 找到 main */
        this.mainDiv = document.getElementById('main');
        this.curFloorNum = 0;  // Floor Array Index 0, 1 ..
        this.curButtonNum = 0; // default Home security btn

        // this.imgTesting = new Image();
        // this.imgTesting.onload = this.CreateDelegate(this.imgTesting, this.imgTesting_onload);
        // this.imgTesting.src = './assets/imgs/floor2_big.png';

        this.aihomeService.getFloors()
            .then((result: any) => {
                this.floors = JSON.parse(result._body);
                // console.log(this.floors);

                const path = this.floors[0].path.split('/');
                const imgPath = 'url(' + path[0] + '/assets/imgs/' + path[1] + ')';

                // Set floor background image:
                this.mainDiv.style.background = imgPath;

                this.mainDiv.style.width = '1500px';
                this.mainDiv.style.height = '850px';

                this.floors[0].active = 'active';
                this.floors[1].active = '';

            }).then(() => {
                this.aihomeService.getDevices()
                    .then((res1: any) => {
                        this.devices = JSON.parse(res1._body);
                        // console.log(this.devices);

                        this.aihomeService.getDevType()
                        .then((items: any) => {
                            this.deviceTypes = JSON.parse(items._body);
                            // console.log(this.deviceTypes);

                            this.devices.forEach(dev => {
                                // All devices create: 
                                // if ( this.floors[this.curFloorNum].number === dev.floorNumber ) {
                                    this.creatOneDiv(dev);
                                // }
                            });
                            this.clickBtn1();   // For Default type : home security 
                        });
                    });
            });
    }

    // 判断设备被点击
    onClickDev(ev): void {

        const devId = ev.target.id;

        // const devObj = devicesData.filter(v=>(v.id === devId))
        // alert(`Dev ID: ${devId}`);
        this.devices.forEach(dev => {

            // console.log(dev.id);
            if (dev.id == devId) {

                // console.log(`Dev ID: ${devId} ${dev.name}  ${dev.status} `);

                // 改变状态值
                if (dev.status === '0') {
                    dev.status = '1';
                } else {
                    dev.status = '0';
                }

                // 改变设备外观
                if ( dev.status === '0' ) {
                    ev.target.style.background = 'url(' + './assets/imgs/' + this.deviceTypes[dev.deviceType - 1].name + '_on40.png)';
                } else {
                    ev.target.style.background = 'url(' + './assets/imgs/' + this.deviceTypes[dev.deviceType - 1].name + '_off40.png)';
                }
            }
        });
    }

    // 创建div对象
    creatOneDiv(dev: Device) {

        const div = document.createElement('div');

        div.className = 'device';
        div.setAttribute('id', dev.id.toString());

        div.setAttribute('_ngcontent-c1', '');

        // div.onclick = this.onClickDev;
        div.onclick = (ev) => {

            // 兼容性处理: 实际点击的DOM对象， ？？？
            // ev.target = ev.target || ev.srcElement;
            // ev.target 点击最终的DOM对象 ， 传入判断函数
            // --------------------------------------------------------
            // Device Div 被点击
            this.onClickDev(ev);
        };

        let background = 'url(' + "'./assets/imgs/" + this.deviceTypes[dev.deviceType - 1].name + "_off40.png')";

        if ( dev.status === '0' ) {
            background = 'url(' + "'./assets/imgs/" + this.deviceTypes[dev.deviceType - 1].name + "_on40.png')";
        }

        div.style.background = background;


        // Must set: div.setAttribute('_ngcontent-c1', "");  to display the device DIV !
        // <div _ngcontent-c1="" class="device" id="5" style="background: url(&quot;./assets/imgs/Outlet_on40.png&quot;) 0% 0% / 40px 40px; left: 678px; top: 545px;"></div>

        div.style.left = dev.x + 'px';
        div.style.top = dev.y + 'px';

        // 是否显示
        if ( this.floors[this.curFloorNum].number !== dev.floorNumber ) {
            div.style.visibility = 'hidden';
        }

        this.mainDiv.appendChild(div);
    }


    clickTabBtn(floor: Floor) {

      this.curFloorNum = floor.number - 1;

        if ( this.curFloorNum === 0 ) {
             // 取消缺省第一个 Tab Btn 的选中
             this.floors[1].active = '';
             this.floors[0].active = 'active';
        } else {
            this.floors[0].active = '';
            this.floors[1].active = 'active';
        }

      const path = this.floors[this.curFloorNum].path.split('/');
      const imgPath = 'url(' + path[0] + '/assets/imgs/' + path[1] + ')';

        // Set floor background image:
        this.mainDiv.style.background = imgPath;


        this.devices.forEach(dev => {

            const item = document.getElementById(dev.id.toString());

            if ( this.floors[this.curFloorNum].number !== dev.floorNumber ) {
                item.style.visibility = 'hidden';
            } else {
                item.style.visibility = '';
            }
        });

        switch (this.curButtonNum) {
            case 0:
                this.clickBtn1();
                break;
            case 1:
                this.clickBtn2();
                break;
            case 2:
                this.clickBtn3();
                break;
            case 3:
                this.clickBtn4();
                break;
            case 4:
                this.clickBtn5();
                break;
        }
    }

    clickBtn1() {
        this.curButtonNum = 0;
        this.devices.forEach(dev => {
            const item = document.getElementById(dev.id.toString());
            if ( this.floors[this.curFloorNum].number !== dev.floorNumber ) {
                item.style.visibility = 'hidden';
            } else {
                if ( !((dev.deviceType === 1) || (dev.deviceType === 2)) ) {
                    item.style.visibility = 'hidden';
                } else {
                    item.style.visibility = '';
                }
            }
        });

        document.getElementById('homeSecrityBtn').style.borderColor = '#FFF';
        document.getElementById('energyTypeBtn').style.borderColor = '#454545';
        document.getElementById('entertainmentTypeBtn').style.borderColor = '#454545';
        document.getElementById('waterTypeBtn').style.borderColor = '#454545';
        document.getElementById('airTypeBtn').style.borderColor = '#454545';
    }

    clickBtn2() {
        this.curButtonNum = 1;
        this.devices.forEach(dev => {
            const item = document.getElementById(dev.id.toString());
            if ( this.floors[this.curFloorNum].number !== dev.floorNumber ) {
                item.style.visibility = 'hidden';
            } else {
                if ( !((dev.deviceType === 3) || (dev.deviceType === 4) ||
                       (dev.deviceType === 5) || (dev.deviceType === 9) || (dev.deviceType === 11))
                ) {
                    item.style.visibility = 'hidden';
                } else {
                    item.style.visibility = '';
                }
            }
        });
        document.getElementById('homeSecrityBtn').style.borderColor = '#454545';
        document.getElementById('energyTypeBtn').style.borderColor = '#FFF';
        document.getElementById('entertainmentTypeBtn').style.borderColor = '#454545';
        document.getElementById('waterTypeBtn').style.borderColor = '#454545';
        document.getElementById('airTypeBtn').style.borderColor = '#454545';
    }

    clickBtn3() {

        this.curButtonNum = 2;
        this.devices.forEach(dev => {
            const item = document.getElementById(dev.id.toString());
            if ( this.floors[this.curFloorNum].number !== dev.floorNumber ) {
                item.style.visibility = 'hidden';
            } else {
                if ( !((dev.deviceType === 6) || (dev.deviceType === 10)) ) {
                    item.style.visibility = 'hidden';
                } else {
                    item.style.visibility = '';
                }
            }
        });
        document.getElementById('homeSecrityBtn').style.borderColor = '#454545';
        document.getElementById('energyTypeBtn').style.borderColor = '#454545';
        document.getElementById('entertainmentTypeBtn').style.borderColor = '#FFF';
        document.getElementById('waterTypeBtn').style.borderColor = '#454545';
        document.getElementById('airTypeBtn').style.borderColor = '#454545';
    }

    clickBtn4() {
        this.curButtonNum = 3;
        this.devices.forEach(dev => {
            const item = document.getElementById(dev.id.toString());
            if ( this.floors[this.curFloorNum].number !== dev.floorNumber ) {
                item.style.visibility = 'hidden';
            } else {
                if ( !((dev.deviceType === 7) ) ) {
                    item.style.visibility = 'hidden';
                } else {
                    item.style.visibility = '';
                }
            }
        });
        document.getElementById('homeSecrityBtn').style.borderColor = '#454545';
        document.getElementById('energyTypeBtn').style.borderColor = '#454545';
        document.getElementById('entertainmentTypeBtn').style.borderColor = '#454545';
        document.getElementById('waterTypeBtn').style.borderColor = '#FFF';
        document.getElementById('airTypeBtn').style.borderColor = '#454545';
    }

    clickBtn5() {
        this.curButtonNum = 4;
        this.devices.forEach(dev => {
            const item = document.getElementById(dev.id.toString());
            if ( this.floors[this.curFloorNum].number !== dev.floorNumber ) {
                item.style.visibility = 'hidden';
            } else {
                if ( !((dev.deviceType === 8) ) ) {
                    item.style.visibility = 'hidden';
                } else {
                    item.style.visibility = '';
                }
            }
        });
        document.getElementById('homeSecrityBtn').style.borderColor = '#454545';
        document.getElementById('energyTypeBtn').style.borderColor = '#454545';
        document.getElementById('entertainmentTypeBtn').style.borderColor = '#454545';
        document.getElementById('waterTypeBtn').style.borderColor = '#454545';
        document.getElementById('airTypeBtn').style.borderColor = '#FFF';
    }

}
