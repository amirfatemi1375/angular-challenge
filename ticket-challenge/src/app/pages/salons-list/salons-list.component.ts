import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/core/services/map/map.service';

@Component({
    selector: 'app-salons-list',
    templateUrl: './salons-list.component.html',
    styleUrls: ['./salons-list.component.scss'],
})
export class SalonsListComponent implements OnInit {
    salonsList: string[] = [];
    constructor(private mapService: MapService) {}

    ngOnInit(): void {
        this.getAllSalons();
    }
    getAllSalons() {
        this.mapService.getAll().subscribe((res) => {
            this.salonsList = res;
        });
    }
    trackById(index: number, salons: any) {
        return index;
    }
}
