import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category, DeviceType, Device } from '../models/defineClass';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
    providedIn: 'root'
})
export class GoodsService {

    public site: string;

    private goodsUrl = 'api/goods';  // URL to web api
    private deviceTypeUrl = 'api/deviceTypes';  // URL to web api
    private categoryUrl = 'app/categraies';  // URL to web api ,  web api   in Memory

    constructor(
        private http: HttpClient) {
    }


    /** GET deviceType from the memory server */
    getDeviceTypes(): Observable<DeviceType[]> {
        console.log('Get Device Types');
        return this.http.get<DeviceType[]>(this.deviceTypeUrl)
            .pipe(
                tap(goods => this.log(`fetched DeviceTypes`)),
                catchError(this.handleError('get all DeviceTypes', []))
            );
    }

    getDeviceTypes_P(): Promise<DeviceType[]> {

        return this.http.get<DeviceType[]>(this.deviceTypeUrl)
            .toPromise()
            .then(response => response);
    }

    getCategory(): Promise<Category[]> {

        return this.http.get<Category[]>(this.categoryUrl)
            // .map(response => response.json().data)
            .toPromise()
            .then(response => response); // ????
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a Service message with the MessageService */
    private log(message: string) {
        // this.messageService.add('Service: ' + message);
    }
}
