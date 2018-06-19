import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule, MatCheckbox } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClientCustom } from 'src/app/service/http-client-custom';
import { ICustomer } from 'src/app/model/customer';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-customers',
  templateUrl: './home-customers.component.html',
  styleUrls: ['./home-customers.component.css']
})
export class HomeCustomersComponent implements OnInit {
  customers: ICustomer[] = [{
    id: '',
    name: '',
    responsibleName: '',
    registerDate: ''
  }];
  array: any = [];
  // ICustomer[] = [{
  //   id: '',
  //   name: '',
  //   responsibleName: '',
  //   registerDate: ''
  // }];

  displayedColumns = ['name', 'responsibleName', 'registerDate'];
  dataSource = new MatTableDataSource<ICustomer>(this.customers);
  selection = new SelectionModel<ICustomer>(true, []);

  constructor(private http: HttpClientCustom) { }


  ngOnInit() {
    this.getData();
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
        this.dataSource = new MatTableDataSource<ICustomer>(this.customers);        
        console.log(this.customers);
      });


  };


  isSelected() {
    return this.selection.selected;
  }

  delete() {
    this.customers.forEach(c => {
      this.http.delete("http://desafio4devs.forlogic.net/api/customers" + c.id);
    });
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

