import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from "../../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExPipePipe} from "../../ex-pipe.pipe";
export interface UserVm {
  name: string;
  age?: number;
  DateOfBirth?:Date;
  email: string;
  password: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public usersServices: UsersService, public exPipePipe: ExPipePipe
              ) { }

  ngOnInit(): void {
  }
  public newUserVm: UserVm = {name: '', age: 0,email: '', password: ''};
//userToUpdate?:UserVm[]={name:''};


  public addUser(userVm: UserVm) {
    console.log(userVm);
    this.usersServices.userList.push(userVm);


  }


  deleteUser(user: UserVm) {
    let i = this.usersServices.userList.indexOf(user)
    if (i >= 0) {
      this.usersServices.userList.splice(i, 1);
    }

  }




}











