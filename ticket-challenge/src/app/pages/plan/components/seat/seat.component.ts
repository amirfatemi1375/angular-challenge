import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SeatStatusEnum } from 'src/app/core/enums/seat-status';

@Component({
    selector: 'app-seat',
    templateUrl: './seat.component.html',
    styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
    @Output() onSelectSeat: EventEmitter<any> = new EventEmitter<any>();
    @Input() status: SeatStatusEnum = SeatStatusEnum.available; // 1 means reserved, 0 means available, -1 means waiting to finish request

    constructor() {}

    ngOnInit(): void {}

    selectSeat() {
        this.onSelectSeat.emit();
    }
}
