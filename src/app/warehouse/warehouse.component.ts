import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Name','Address' ],
      dataRows: [
          ['1', 'Area1','10,Malabe'],
          ['2', 'Area1','10,Malabe'],
          ['3', 'Area1','10,Malabe'],
          ['4', 'Area1','10,Malabe'],
          ['6', 'Area1','10,Malabe']
      ]
  };
  }

}
