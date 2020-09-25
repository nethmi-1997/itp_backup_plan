import { Component, OnInit } from '@angular/core';
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  public tableData1: TableData;
  constructor() { }

  ngOnInit(): void {
    this.tableData1 = {
        headerRow: [ 'ID', 'Name','Address', 'Phone-Number', 'email', ],
        dataRows: [
            ['1', 'Pronto','123,Malabe','0711087967','A@a.com'],
            ['2', 'DHL','sd,Malabe','0711087967','B@a.com'],
            ['3', 'FEDEX','34,Malabe','0711087967','C@a.com'],
            ['4', 'Kapruka','123,Malabe','0711187967','D@a.com'],
            ['6', 'UPS','123,Malabe','0711087967','K@a.com']
        ]
    };
  }

}
