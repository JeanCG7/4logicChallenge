import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatCardModule, MatListModule, MatTableModule, MatTableDataSource, MatCheckbox} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientCustom } from 'src/app/service/http-client-custom';
import { CreateEvaluationComponent } from './create-evaluation/create-evaluation.component';
import { DialogEvaluationComponent } from './dialog-evaluation/dialog-evaluation.component';
import { HomeCustomersComponent } from './home-customers/home-customers.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    HomeComponent,
    CreateEvaluationComponent,
    DialogEvaluationComponent,
    HomeCustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatCheckboxModule
    
  ],
  entryComponents:[
    DialogEvaluationComponent
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  HttpClientCustom
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
