import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IApiBaseActions {
    get(url: string, params?: HttpParams): Observable<any>;

    getAll(url: string, params?: HttpParams): Observable<any>;

    post(url: string, data: any, params?: HttpParams): Observable<any>;

    delete(url: string, data?: any, params?: HttpParams): Observable<any>;

    put(url: string, data: any, params?: HttpParams): Observable<any>;

    patch(url: string, data: any, params?: HttpParams): Observable<any>;
}
