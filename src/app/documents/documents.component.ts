import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }


  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'Document Name', 'code', 'status','Type', 'Create Date', 'Department'],
      dataRows: [
          ['Product/service requirement documents', '1', 'Completed', 'PDF', '20/08/20', 'HR'],
          ['Quality Review', '2', 'Completed', 'PDF', '25/08/20', 'MD'],
          ['Safety Documents', '3', 'Completed', 'PDF', '27/08/20', 'HR'],
          ['Internal audit program documents', '4', 'Completed', 'PDF', '28/08/20', 'HR'],
          ['Result of internal audit', '5', 'Completed', 'PDF', '30/08/20', 'HR'],
          ['Results of management', '6', 'Completed', 'PDF', '25/08/20', 'MnD']
      ]
  };
    
  }

}
