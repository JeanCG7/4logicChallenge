import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClientCustom } from 'src/app/service/http-client-custom';
import { FormArray } from '@angular/forms';
import { ICustomer } from 'src/app/model/customer';
import { MatDialog } from '@angular/material';
import { DialogEvaluationComponent } from 'src/app/dialog-evaluation/dialog-evaluation.component';
import { IEvaluation } from 'src/app/model/evaluation';
import swal from 'sweetalert';


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

  evaluations: IEvaluation[] = [{
    id: '',
    evalDate: '',
    evals: {
      grade: 0,
      idCustomer: '',
      reason: ''
    }
  }];
  array: any = [{
    grade: 0,
    idCustomer: '',
    reason: ''
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

    this.getEvalData();
    this.getData();
    //this.evalForm.valueChanges.subscribe(console.log);

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

  getEvalData() {
    this.http.get("http://desafio4devs.forlogic.net/api/evaluations").
      subscribe(datas => {
        this.evaluations = Object.values(datas);
        var i = 0;
        for (var data in datas) {
          this.evaluations[i].id = data;
          i++;
        }
        console.log(this.evaluations);
      });
  }
  get evalForms() {
    return this.evalForm.get('evals') as FormArray
  }

  get eDate() {
    return this.evalForm.get('evalDate');
  }

  addEval() {
    const evalu = this.fb.group({
      grade: ['', [
        Validators.required
      ]],
      reason: ['', [
        Validators.required
      ]],
      idCustomer: ['', [
        Validators.required
      ]]
    })
    this.evalForms.push(evalu);
    console.log(this.evalForms.length);
  }

  deleteEval(i) {
    this.evalForms.removeAt(i);
  }

  validate(): boolean {

    var totalC = this.customers.length * 0.2;
    if (this.evalForms.length <= totalC) {
      swal("An evaluation must have at least 20% users");
      return false;
    } else if (this.evalRegistered()) {
      return false;
    }
    return true;
  }

  submitHandler() {
    if (this.validate()) {
      const formValue = this.evalForm.value;
      this.http.post("http://desafio4devs.forlogic.net/api/evaluations", formValue).subscribe(data => {
        console.log(data);
      });
    }
    this.getData();
    this.getEvalData();
  }

  evalRegistered() {
    var formDate = this.eDate.value;
    for (var i = 0; i < this.evaluations.length; i++) {
      var v = this.evaluations[i].evalDate;
      var date = new Date(v);
      var month = date.getMonth();
      var year = date.getFullYear();
      if (new Date(formDate).getMonth() == month &&
        new Date(formDate).getFullYear() == year
      ) {
        swal("There's an existing evaluation in " + (month + 1) + "/" + year);
        return true;
      }
    }
    return false;
  }

  selectCustId(i) {
    console.log(i); 
  }

  // gradeValidate(i){
  //   console.log(this.evalForms.value[i].grade);
  //   if(this.evalForms.value[i].grade > 10){
  //     this.evalForms.value[i].grade = 10
  //   } 
  //   if(this.evalForms.value[i].grade < 0){
  //     this.evalForms.value[i].grade = 0;
  //   }
  // }
}

