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
      headerRow: [ 'ID', 'Name','Quantity','price','location','weight' ],
      dataRows: [
          ['1', 'ABC','900','2000','Area1','1000'],
          ['2', 'ABC','900','2000','Area1','1000'],
          ['3', 'ABC','900','2000','Area1','1000'],
          ['4', 'ABC','900','2000','Area1','1000'],
          ['6', 'ABC','900','2000','Area1','1000']
      ]
  };
  }

}
