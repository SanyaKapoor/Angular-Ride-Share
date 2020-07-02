import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DisplayRequestsComponent } from '../display-requests/display-requests.component';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent{

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
