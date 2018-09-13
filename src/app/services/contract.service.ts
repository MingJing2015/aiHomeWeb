import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

// import 'rxjs/add/operator/toPromise';  // ???

@Injectable({
    providedIn: 'root'
})
export class ContractService {

    // private contractUrl = '/api/contracts';
    private contractUrl = 'https://obscure-plateau-31248.herokuapp.com/api/shopnas';

    // private contractUrl = 'http://127.0.0.1:3000/api/shopnas';       // For local debug, need open CORS on Chrome 

    private devicesUrl = 'https://obscure-plateau-31248.herokuapp.com/api/devices';

    // constructor(private http: HttpClient) { }  // ??????????????? Http ????
    // constructor(private http: HttpClient) { }   // Can not be used : HttpClient ?????
    constructor(private http: Http) {}

    getContracts(hash: string): Promise<any | void> {
        return this.http.get(this.contractUrl + '/' + hash)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    /** #1. GET devices from the REST API heroku server */
    getDevices(): Promise<any | void> {
        return this.http.get(this.devicesUrl)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }


    /** 2. set device status  **/
    setDeviceStatus(data: any): Promise<any> {

        // var info = data.toAddress + '`' + data.nonce.toString() + '`' + data.value + '`' + data.contractAddress;

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

    // 2. 测试合约
    testTransaction(data: any): Promise<any> {

        var info = data.toAddress + '`' + data.nonce.toString() + '`' + data.value + '`' + data.contractAddress;

        var putUrl = this.contractUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";

        return this.http.put(putUrl, data)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    // 3. 执行合约 Call
    callTransaction(file: any, data: any): Promise<any> {

        //var info = data.toAddress + ' ' + data.nonce.toString() + ' ' + data.value;
        var info = data.toAddress + '`' + data.password + '`' + data.nonce.toString() + '`' + data.value + '`' + data.function + '`' + data.arguments;

        // , 'function': this.function, 'arguments': this.arguments 

        var putUrl = this.contractUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";

        console.log(file);
        console.log(info);

        return this.http.post(putUrl, file)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

}
