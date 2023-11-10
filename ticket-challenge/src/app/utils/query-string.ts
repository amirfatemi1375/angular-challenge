import { HttpParams } from '@angular/common/http';
export function createParams(params?: HttpParams) {
    let httpParams = new HttpParams();
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            httpParams = httpParams.append(key, value);
        });
    }
    return httpParams;
}
