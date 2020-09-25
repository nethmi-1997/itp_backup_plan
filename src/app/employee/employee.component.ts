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
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'NIC','Name','Address', 'Phone-Number', 'email','DOB','Department-ID','Designation-ID' ],
      dataRows: [
          ['1', '1234','Nethmi','123,Malabe','0711087967','A@a.com','12.09.1986','001','002'],
          ['2', '1234','Kalpa','sd,Malabe','0711087967','B@a.com','12.09.1986','001','002'],
          ['3','1234', 'yasir','34,Malabe','0711087967','C@a.com','12.09.1986','001','002'],
          ['4','1234', 'Harshi','123,Malabe','0711187967','D@a.com','12.09.1986','001','002'],
          ['5', '1234','Kushi','45,Malabe','07115767967','H@a.com','12.09.1986','001','002'],
          ['6','1234', 'Nethmi','123,Malabe','0711087967','K@a.com','12.09.1986','001','002']
      ]
  };
  }

}
