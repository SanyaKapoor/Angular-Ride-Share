import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DisplayRequestsComponent } from './display-requests/display-requests.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Requests';
  number='3';
  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }
  openDialog1(){
    this.dialog.open(DisplayRequestsComponent);
  }
}

export const Components=[DialogExampleComponent,DisplayRequestsComponent]
