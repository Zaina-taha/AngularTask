import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

declare var AddContent: any;
declare var Reset: any;

export interface UserVm {
  name: string;
  age: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  ngOnInit(): void {
   new AddContent();
    new Reset();
  }
}








