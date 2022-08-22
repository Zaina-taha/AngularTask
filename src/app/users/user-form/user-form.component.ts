import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserVm} from "../../app.component";
import {UsersService} from "../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";






@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

//  @Output() formSubmit: EventEmitter<UserVm> = new EventEmitter();




  constructor(public usersServices: UsersService,
              public activatedRoute:ActivatedRoute,
              public router:Router,
              private datePipe:DatePipe
  ) {

  }

  ngOnInit(): void {


  }


  newUserVm: UserVm = {name: '', age: 0,DateOfBirth:new Date(), email: '', password: ''};

  public addUser(form: NgForm) {

    console.log(form.form.valid, this.newUserVm)
    if (!form.form.valid) {
      form.form.markAllAsTouched();
    } else {
      this.usersServices.userList.push(this.newUserVm);
      this.router.navigate(['/users/list']);

    }
  }


 }
