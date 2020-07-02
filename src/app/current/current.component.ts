import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DisplayRequestsComponent } from '../display-requests/display-requests.component';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  title='Requests';
  number='3';
  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }
  openDialog1(){
    this.dialog.open(DisplayRequestsComponent);
  }

  ngOnInit(): void {
  }

}
