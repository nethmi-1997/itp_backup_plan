import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
 
  { path: '/add-customer', title: 'Add Customer',  icon:'fa fa-file-text', class: '' },
];
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Name','Address', 'Phone-Number', 'email', ],
      dataRows: [
          ['1', 'Nethmi','123,Malabe','0711087967','A@a.com'],
          ['2', 'Kalpa','sd,Malabe','0711087967','B@a.com'],
          ['3', 'yasir','34,Malabe','0711087967','C@a.com'],
          ['4', 'Harshi','123,Malabe','0711187967','D@a.com'],
          ['5', 'Kushi','45,Malabe','07115767967','H@a.com'],
          ['6', 'Nethmi','123,Malabe','0711087967','K@a.com']
      ]
  };

  }

}
