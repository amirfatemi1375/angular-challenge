import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'salons',
        loadChildren: () =>
            import('./pages/salons-list/salons-list.module').then(
                (m) => m.SalonsListModule
            ),
    },
    {
        path: 'plan/:id',
        loadChildren: () =>
            import('./pages/plan/plan.module').then((m) => m.PlanModule),
    },
    { path: '', redirectTo: 'salons', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
