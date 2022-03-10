import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuantDataDashoardComponent } from './quant-data-dashboard/quant-data-dashoard.component';
import { ResultDataDashboardComponent } from './result-data-dashboard/result-data-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'todoDashboard',pathMatch:'full'},
  { path:'resultDashboard',component:ResultDataDashboardComponent},
  { path:'todoDashboard', component: QuantDataDashoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

