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
        ['1', '1', 'Transport', '2020/09/21', '4000', 'Document 1'],
        ['2', '1', 'Lunch', '2020/09/22', '3000', 'Document 2'],
        ['3', '2', 'Sick', '2020/09/22', '7000', 'Document 2'],
        ['4', '1', 'Pay Expenses', '2020/09/25', '10000', 'Document 1'],
      ]
    };

  }

}
