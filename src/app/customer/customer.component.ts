import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddCustomerComponent } from 'app/add-customer/add-customer.component';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public tableData1: TableData;
  constructor( public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddCustomerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
      dataRows: [
          ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
          ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
          ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
          ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
          ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
          ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
      ]
  };
    
  }

}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
