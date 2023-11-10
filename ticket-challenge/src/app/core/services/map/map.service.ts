import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { IReserve } from '../../interface/reserve';

@Injectable({
    providedIn: 'root',
})
export class MapService {
    constructor(private apiService: HttpService) {}
    getAll() {
        // return this.apiService.getAll(`${environment.baseUrl}` + endpoint);
        const data = ['m213', 'm654', 'm63', 'm6888'];
        return of(data);
    }
    get(endpoint: string, id: string) {
        return this.apiService.get(`${environment.baseUrl}` + endpoint, { id });
    }
    getAllSeat(salonId: string): Observable<number[][]> {
        // return this.apiService.get(`${environment.baseUrl}` + endpoint/${salonId});
        let data = [];
        for (let i = 0; i <= 12; i++) {
            const arr = [];
            for (let j = 0; j <= 24; j++) {
                const random = Math.floor(Math.random() * 2);
                arr.push(random);
            }
            data.push(arr);
        }
        return of(data);
    }

    reserveSeat(salonId: string, item: IReserve): Observable<any> {
        // return this.apiService.post(`${environment.baseUrl}` + endpoint/${salonId}/ticket,item);
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next('صندلی انتخابی با موفقیت رزرو شد');
                observer.complete();
            }, 1000);
        });
    }
}
