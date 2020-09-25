import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-adjustments',
  templateUrl: './adjustments.component.html',
  styleUrls: ['./adjustments.component.css']
})
export class AdjustmentsComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Employee Number', 'Description', 'Date', 'Amount', 'Type'],
      dataRows: [
        ['1', '1', 'Loan Cut', '2020/09/20 13:05:02', '5000', 'Deduction'],
        ['2', '2', 'Overtime', '2020/09/22 13:10:24', '10000', 'Addition'],
        ['3', '2', 'Salary Advance', '2020/09/22 13:12:54', '8000', 'Addition'],
        ['4', '1', 'Other', '2020/09/25 13:15:04', '5000', 'Deduction'],
        ['5', '3', 'Overtime', '2020/09/20 13:17:24', '10000', 'Addition'],
        ['6', '4', 'Holiday Cut', '2020/09/24 13:19:48', '6000', 'Deduction'],
      ]
    };

  }

}
