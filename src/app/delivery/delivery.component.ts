import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Order ID', 'Provider ID', 'Date', 'Type', 'Value', 'Gross Weight', 'Status', 'Picked Date'],
      dataRows: [
        ['1', '1', '3', '2020/09/20', 'Box', '20000', '5.3', 'Delivered', '2020/09/22'],
        ['2', '2', '4', '2020/09/22', 'Parcel', '15000', '6.2', 'Pending', ''],
        ['3', '2', '4', '2020/09/23', 'Parcel', '17500', '7.1', 'Delivered', '2020/09/25'],
        ['4', '3', '5', '2020/09/25', 'Parcel', '11000', '6.0', 'Pending', ''],
      ]
    };

  }

}
