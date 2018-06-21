import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IEvaluation } from 'src/app/model/evaluation';
import { HttpClientCustom } from 'src/app/service/http-client-custom';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-home-evaluation',
  templateUrl: './home-evaluation.component.html',
  styleUrls: ['./home-evaluation.component.css']
})
export class HomeEvaluationComponent implements OnInit {
  maxDate = new Date();
  avg: number = 0;
  dateForm: FormGroup;
  evaluations: IEvaluation[] = [{
    id: '',
    evalDate: '',
    evals: {
      grade: 0,
      idCustomer: '',
      reason: ''
    },
    avg: 0
  }];

  evalCust: any[] = [{
    evalID: '',
    grade: 0,
    reason: ''
  }];

  selectedEvaluations: IEvaluation[] = [{
    id: '',
    evalDate: '',
    evals: {
      grade: 0,
      idCustomer: '',
      reason: ''
    },
    avg: 0
  }];

  constructor(private http: HttpClientCustom, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.selectedEvaluations = [];
    this.dateForm = this.fb.group({
      selectedDate: ['', [
        Validators.required
      ]]
    })

    this.getData();
  }

  get selectedDate() {
    return this.dateForm.get('selectedDate')
  }

  getData() {
    this.http.get("http://desafio4devs.forlogic.net/api/evaluations").
      subscribe(datas => {
        this.evaluations = Object.values(datas);
        var i = 0;
        for (var data in datas) {
          this.evaluations[i].id = data;
          i++;
        }
        console.log(this.evaluations);
        this.getAvg();
      });
  }

  getEvalsMonth() {
    this.getData();
    //this.selectedEvaluations = [];
    var v = this.selectedDate.value;
    var date = new Date(v);
    var month = date.getMonth();
    var year = date.getFullYear();
    this.reset();
    for (var i = 0; i < this.evaluations.length; i++) {
      var temp = this.evaluations[i].evalDate;
      if (month == new Date(temp).getMonth() &&
        year == new Date(temp).getFullYear()) {
        this.selectedEvaluations[i] = this.evaluations[i];
      }
    }
  }

  getAvg() {
    var i = 0;
    this.evaluations.forEach(ev => {
      this.avg = 0;      
      for (i = 0; ev.evals[i] != undefined; i++) {
        if (ev.evals[i].grade >= 0) {
          this.avg = this.avg + parseInt(ev.evals[i].grade);
        }
      }
      ev.avg = (this.avg/i);
      console.log(ev.avg);
    });
  }


  deleteEval(id) {
    this.http.delete("http://desafio4devs.forlogic.net/api/evaluations/" + id).
      subscribe(data => {
        swal("Eval deleted sucefully");
        this.getData();

      })

  }
  // getGrades() {
  //   this.evaluations.forEach(ev => {
  //     for (var i = 0; ev.evals[i] != undefined; i++) {
  //       this.evalCust[i].evalID = ev.id;
  //       this.evalCust[i].grade = ev.evals[i].grade;
  //       this.evalCust[i].reason = ev.evals[i].reason;
  //     }
  //   });
  //   console.log(this.evalCust);
  // }

  reset() {
    this.selectedEvaluations = [{
      id: '',
      evalDate: '',
      evals: {
        grade: 0,
        idCustomer: '',
        reason: ''
      }
    }];
  }
}
