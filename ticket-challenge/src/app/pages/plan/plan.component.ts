import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeatStatusEnum } from 'src/app/core/enums/seat-status';
import { IReserve } from 'src/app/core/interface/reserve';
import { MapService } from 'src/app/core/services/map/map.service';

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
    seatsList: number[][] = [];
    salonId!: string;

    constructor(
        private mapService: MapService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getSalonId();
        this.getSeatsList();
    }

    getSalonId() {
        this.activatedRoute.params.subscribe((params) => {
            this.salonId = params['id'];
        });
    }

    getSeatsList() {
        this.mapService.getAllSeat(this.salonId).subscribe({
            next: (res: number[][]) => {
                this.seatsList = res;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }

    reserveSeat(seat: IReserve) {
        // prevent user from sending request frequently
        if (
            this.seatsList[seat.x][seat.y] == SeatStatusEnum.waiting ||
            this.seatsList[seat.x][seat.y] == SeatStatusEnum.reserved
        )
            return;

        this.seatsList[seat.x][seat.y] = SeatStatusEnum.waiting;

        this.mapService.reserveSeat(this.salonId, seat).subscribe({
            next: () => {
                this.seatsList[seat.x][seat.y] = SeatStatusEnum.reserved;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }
}
