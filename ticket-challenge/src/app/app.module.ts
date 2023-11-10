import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './pages/plan/plan.component';
import { SalonsListComponent } from './pages/salons-list/salons-list.component';

@NgModule({
    declarations: [AppComponent, PlanComponent, SalonsListComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
