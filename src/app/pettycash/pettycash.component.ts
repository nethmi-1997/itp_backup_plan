import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-pettycash',
  templateUrl: './pettycash.component.html',
  styleUrls: ['./pettycash.component.css']
})
export class PettycashComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Employee Number', 'Reason', 'Date', 'Amount', 'Proof Document'],
      dataRows: [
        ['1', '1', 'Transport', '2020/09/21 13:10:04', '4000', 'Document 1'],
        ['2', '1', 'Lunch', '2020/09/22 13:14:26', '3000', 'Document 2'],
        ['3', '2', 'Sick', '2020/09/22 13:15:25', '7000', 'Document 2'],
        ['4', '3', 'Pay Expenses', '2020/09/25 13:18:25', '12000', 'Document 3'],
      ]
    };

  }

}
