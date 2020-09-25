import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Employee Number', 'Month', 'Issue Date', 'Total'],
      dataRows: [
        ['1', '1', '09', '2020/09/20 11:30:32', '55000'],
        ['2', '2', '09', '2020/09/20 11:30:58', '65000'],
        ['3', '2', '09', '2020/09/20 11:31:24', '42000'],
        ['4', '1', '09', '2020/09/20 11:32:23', '56000'],
        ['5', '3', '09', '2020/09/20 11:33:07', '55000'],
        ['6', '4', '09', '2020/09/20 11:33:46', '61000'],
      ]
    };

  }

}
