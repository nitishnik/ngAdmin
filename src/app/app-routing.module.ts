import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormModule } from './modules/shared/dynamic-form/dynamic-form.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form' },
  {
    path: 'form', 
    loadChildren: () => import('./modules/shared/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DynamicFormModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
