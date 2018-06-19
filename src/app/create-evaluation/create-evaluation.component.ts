import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClientCustom } from 'src/app/service/http-client-custom';
import { FormArray } from '@angular/forms';
import { ICustomer } from 'src/app/model/customer';
import { MatDialog } from '@angular/material';
import { DialogEvaluationComponent } from 'src/app/dialog-evaluation/dialog-evaluation.component';


@Component({
  selector: 'app-create-evaluation',
  templateUrl: './create-evaluation.component.html',
  styleUrls: ['./create-evaluation.component.css']
})
export class CreateEvaluationComponent implements OnInit {
  evalForm: FormGroup;
  maxDate = new Date();  
  selectedCustomers: ICustomer[] = [{
    id: '',
    name: '',
    responsibleName: '',
    registerDate: ''
  }];


  customersF = new FormControl();

  customers: ICustomer[] = [{
    id: '',
    name: '',
    responsibleName: '',
    registerDate: ''
  }];

  customerList = ['Jose', 'Afonso', 'Miguel', 'Karl', 'Marx', 'Poiel'];
  constructor(private fb: FormBuilder, private http: HttpClientCustom, public dialog: MatDialog) { }

  ngOnInit() {


    this.evalForm = this.fb.group({
      evalDate: ['', [
        Validators.required
      ]],
      evals: this.fb.array([])
    });

    this.getData();
    this.evalForm.valueChanges.subscribe(console.log);

  }

  getData() {
    this.http.get("http://desafio4devs.forlogic.net/api/customers").
      subscribe(datas => {
        this.customers = Object.values(datas);
        var i = 0;
        for (var data in datas) {
          this.customers[i].id = data;
          i++;
        }
        console.log(this.customers);
      });
  }

  get evalForms() {
    return this.evalForm.get('evals') as FormArray
  }

  addEval() {
      const evalu = this.fb.group({
      grade: [],
      reason: [],
      idCustomer: []
    })
    this.evalForms.push(evalu);
    console.log(this.evalForms.length);
  }

  deleteEval(i) {
    this.evalForms.removeAt(i);
  }
  
  validate(): boolean{
    var totalC = this.customers.length * 0.2;
    if(this.evalForms.length >= totalC){
        console.log("num deu");
  }
  return true;
}

  submitHandler(){
    if(!this.validate()){
     const formValue = this.evalForm.value;
     this.http.post("http://desafio4devs.forlogic.net/api/evaluations", formValue).subscribe(data => {
        console.log(data);
     });
    this.getData();
    }
  }
  
}

