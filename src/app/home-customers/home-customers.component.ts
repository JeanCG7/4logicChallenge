import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule, MatCheckbox } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClientCustom } from 'src/app/service/http-client-custom';
import { ICustomer } from 'src/app/model/customer';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { IEvaluation } from 'src/app/model/evaluation';
import { makeAnimationEvent } from '@angular/animations/browser/src/render/shared';
import swal from 'sweetalert';


@Component({
  selector: 'app-home-customers',
  templateUrl: './home-customers.component.html',
  styleUrls: ['./home-customers.component.css']
})
export class HomeCustomersComponent implements OnInit {
  grade: any = [];
  customers: ICustomer[] = [{
    id: '',
    name: '',
    responsibleName: '',
    registerDate: '',
    status:'' 
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
    
  }];
  // ICustomer[] = [{
  //   id: '',
  //   name: '',
  //   responsibleName: '',
  //   registerDate: ''
  // }];
  displayedColumns = ['select', 'name', 'responsibleName', 'registerDate', 'status'];
  dataSource = new MatTableDataSource<ICustomer>(this.customers);
  selection = new SelectionModel<ICustomer>(true, []);

  constructor(private http: HttpClientCustom) { }


  ngOnInit() {
    this.getData();
    this.getDataEval();
    this.lastGrade();    
  }

  getData() {
    this.http.get("http://desafio4devs.forlogic.net/api/customers").
      subscribe(datas => {
        this.customers = Object.values(datas);
        var i = 0;
        for (var data in datas) {
          this.customers[i].status="None";
          this.customers[i].id = data;
          i++;
        }
        this.lastGrade();
        this.dataSource = new MatTableDataSource<ICustomer>(this.customers);

      });
  };

  getDataEval() {
    this.http.get("http://desafio4devs.forlogic.net/api/evaluations").
      subscribe(datas => {
        this.evaluations = Object.values(datas);
        var i = 0;
        for (var data in datas) {
          this.evaluations[i].id = data;
          i++;
        }
        this.lastGrade();        
      });
  }


  isSelected() {
    return this.selection.selected;
  }

  delete() {
    this.customers.forEach(c => {
      this.http.delete("http://desafio4devs.forlogic.net/api/customers" + c.id).
      subscribe(data =>{
      });
    });
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    //console.log(this.selection.selected);
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  teste() {
    console.log(this.dataSource);
  }

  deleteCust() {
    this.selection.selected.forEach(c => {
      this.http.delete("http://desafio4devs.forlogic.net/api/customers/" + c.id)
        .subscribe(() => {
          this.getData();
          swal("Customer deleted sucefully");          
        });
    });
  }

  lastGrade() {
    var temp = this.evaluations[0].evalDate;
    var date = new Date(temp);
    this.evaluations.forEach(ev => { //for each para passar por cada evaluation  //colocando o numerador na frente do evals (array de grade, reason e idcustomer) eu imprimo o idCustome
      for (var j = 0; j < this.customers.length; j++) {
        for (var i = 0; ev.evals[i] != undefined; i++) {
          var note = ev.evals[i].grade;
          if (new Date(ev.evalDate) >= date) {
            date = new Date(ev.evalDate);
            if (ev.evals[i].idCustomer == this.customers[j].id) {
              if (note >= 9 && note <= 10)
                this.customers[j].status = "Forwarder"
              else if (note >= 7 && note <= 8)
                this.customers[j].status = "Neutral"
              else if (note >= 0 && note <= 6)
                this.customers[j].status = "Detractor"
            }
          }
        }
      }
    });
  }

}

