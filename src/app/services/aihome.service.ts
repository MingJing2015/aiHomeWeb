import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { DeviceType, Device, Floor, Category } from '../models/defineClass';

@Injectable({
    providedIn: 'root'
})
export class AihomeService {

    private floorsUrl  = 'https://obscure-plateau-31248.herokuapp.com/api/floorsfast';   // no image data, so fast
    private devicesUrl = 'https://obscure-plateau-31248.herokuapp.com/api/devices';
    private devTypeUrl = 'https://obscure-plateau-31248.herokuapp.com/api/devicetype';

    // constructor(private http: HttpClient) { }  // ??????????????? Http ????
    // constructor(private http: HttpClient) { }   // Can not be used : HttpClient ?????
    constructor(private http: Http) {}


    /** #1. GET devices from the REST API heroku server */
    getDevices(): Promise<any | void> {
        return this.http.get(this.devicesUrl)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }


    /** GET floors from the REST API heroku server */
    getFloors(): Promise<any | void> {
        return this.http.get(this.floorsUrl)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    /** GET floors from the REST API heroku server */
    getDevType(): Promise<any | void> {
        return this.http.get(this.devTypeUrl)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    /** 2. set device status  **/
    setDeviceStatus(data: any): Promise<any> {

        const putUrl = 'https://obscure-plateau-31248.herokuapp.com/api/device/' + data.id;
        // const putUrl = 'http://localhost:3000/api/device/' + data.id;

        const temp = data.status === '1' ? '0' : '1';
        console.log(data);
        console.log(temp);
        data.status = temp;
        console.log(data);

        return this.http.put(putUrl, data)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }


    

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }
}
