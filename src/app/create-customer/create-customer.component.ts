import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { getLocaleDateFormat } from '@angular/common/src/i18n/locale_data_api';
import * as moment from 'moment';
import swal from 'sweetalert';

import { HttpClientCustom } from 'src/app/service/http-client-custom';
import { ICustomer } from 'src/app/model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customers: ICustomer[] = [
  ];

  constructor(private fb: FormBuilder, private http: HttpClientCustom) { }
  maxDate = new Date();
  ngOnInit() {
    this.customerForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      responsibleName: ['', [
        Validators.required
      ]],
      registerDate: ['', [
        Validators.required,
      ]]
    })
    this.customerForm.valueChanges.subscribe(console.log);
    this.getData();
  }

  get name() {
    return this.customerForm.get('name');
  }

  get responsibleName() {
    return this.customerForm.get('responsibleName');
  }

  get registerDate() {
    return this.customerForm.get('registerDate');
  }

  submitHandler() {
    const formValue = this.customerForm.value;
    this.http.post("http://desafio4devs.forlogic.net/api/customers", formValue).subscribe(data => {
      swal("Customer created sucefully");
    });
    this.getData();
  }

  getData() {
    this.http.get("http://desafio4devs.forlogic.net/api/customers").
      subscribe(data => {
        this.customers = Object.values(data);
      });
  }




}
