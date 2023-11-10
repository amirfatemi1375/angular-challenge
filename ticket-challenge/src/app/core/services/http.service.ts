import { Injectable } from '@angular/core';
import { IApiBaseActions } from '../interface/api-base-actions';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { createParams } from 'src/app/utils/query-string';
@Injectable({
    providedIn: 'root',
})
export class HttpService implements IApiBaseActions {
    constructor(public httpClient: HttpClient) {}
    get(url: string, params?: any) {
        return this.httpClient
            .get(url, { params: createParams(params) })
            .pipe(tap((x) => {}));
    }

    getAll(url: string, params?: HttpParams) {
        return this.httpClient
            .get(url, { params: createParams(params) })
            .pipe(tap((x) => {}));
    }

    post(url: string, data: any, params?: HttpParams) {
        return this.httpClient
            .post(url, data, { params: createParams(params) })
            .pipe(tap((x) => {}));
    }

    delete(url: string, data: any, params?: HttpParams) {
        return this.httpClient
            .delete(url, { params: createParams(params) })
            .pipe(tap((x) => {}));
    }

    put(url: string, data: any, params?: HttpParams) {
        return this.httpClient
            .put(url, data, { params: createParams(params) })
            .pipe(tap((x) => {}));
    }

    patch(url: string, data: any, params?: HttpParams) {
        return this.httpClient
            .put(url, data, { params: createParams(params) })
            .pipe(tap((x) => {}));
    }
}
