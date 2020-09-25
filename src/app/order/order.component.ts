import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Product-ID','Customer-ID', 'Brand', 'Shipping-Address', 'Net-weight','Date'],
      dataRows: [
          ['1', '0001', 'ooo2', 'A', '123,Malabe','2200','12-09-2019'],
          ['2', '0002', 'ooo3', 'A', 'dnm,Maharagama','4200','23-09-2020'],
          ['3', '0001', 'ooo2', 'B', '123,Matara','3200','12-09-2020'],
          ['4', '0003', 'ooo3', 'C', '123,Malabe','2200','12-09-2020'],
          ['5', '0004', 'ooo2', 'D', 'hjk,Colombo9','3200','12-10-2020'],
          ['6', '0001', 'ooo2', 'A', '123,Malabe','2200','08-09-2020']
      ]
  };
  }

}
