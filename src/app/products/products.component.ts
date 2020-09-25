import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
