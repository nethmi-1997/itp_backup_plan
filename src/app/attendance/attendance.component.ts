import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Employee Number', 'In Time', 'Out Time'],
      dataRows: [
        ['1', '1', '2020/09/20 07:37:21', '2020/09/20 17:35:18'],
        ['2', '2', '2020/09/20 07:40:24', '2020/09/20 17:38:37'],
        ['3', '3', '2020/09/20 07:41:58', '2020/09/20 17:39:12'],
        ['4', '4', '2020/09/20 07:45:10', '2020/09/20 17:39:51'],
        ['5', '5', '2020/09/20 07:47:32', '2020/09/20 17:42:23'],
        ['6', '6', '2020/09/20 07:50:52', '2020/09/20 17:45:02'],
      ]
    };

  }

}
