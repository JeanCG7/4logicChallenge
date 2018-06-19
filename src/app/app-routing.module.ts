import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from 'src/app/create-customer/create-customer.component';
import { CreateEvaluationComponent } from 'src/app/create-evaluation/create-evaluation.component';
import { HomeCustomersComponent } from 'src/app/home-customers/home-customers.component';

const routes: Routes = [
  {path: 'createCustomer', component: CreateCustomerComponent},
  {path: 'createEval', component:CreateEvaluationComponent},
  {path: '', component: HomeCustomersComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
