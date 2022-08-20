import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserVm} from "../app.component";






@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<UserVm> = new EventEmitter();




  constructor() {

  }

  ngOnInit(): void {


  }


  newUserVm: UserVm = {name: '', age: '', email: '', password: ''};

  public addUser(form: NgForm) {

    console.log(form.form.valid, this.newUserVm)
    if (!form.form.valid) {
      form.form.markAllAsTouched();
    } else {
      this.formSubmit.emit(this.newUserVm)
    }
  }


 }
