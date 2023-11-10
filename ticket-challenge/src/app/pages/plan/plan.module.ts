import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { SeatComponent } from './components/seat/seat.component';

@NgModule({
    declarations: [PlanComponent, SeatComponent],
    imports: [CommonModule, PlanRoutingModule],
})
export class PlanModule {}
