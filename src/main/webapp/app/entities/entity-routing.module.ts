import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'appointment',
        data: { pageTitle: 'baamtuappointmentwithpermissionsmavenApp.appointment.home.title' },
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule),
      },
      {
        path: 'manager',
        data: { pageTitle: 'baamtuappointmentwithpermissionsmavenApp.manager.home.title' },
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule),
      },
      {
        path: 'company',
        data: { pageTitle: 'baamtuappointmentwithpermissionsmavenApp.company.home.title' },
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
      },
      {
        path: 'bank',
        data: { pageTitle: 'baamtuappointmentwithpermissionsmavenApp.bank.home.title' },
        loadChildren: () => import('./bank/bank.module').then(m => m.BankModule),
      },
      {
        path: 'adviser',
        data: { pageTitle: 'baamtuappointmentwithpermissionsmavenApp.adviser.home.title' },
        loadChildren: () => import('./adviser/adviser.module').then(m => m.AdviserModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
