import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
export interface UserVm {
  name: string;
  age: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: UserVm[] = [{
    name: 'zaina',
    age: '22',
    email: "tahazena32@gmail.com",
    password: '12324'
  }
  ];

  public newUserVm: UserVm = {name: '', age: '', email: '', password: ''};
//userToUpdate?:UserVm[]={name:''};


  public addUser(userVm: UserVm) {
    console.log(userVm);
    this.userList.push(userVm);
    console.log(this.userList);
  }


  deleteUser(user: UserVm) {
    let i = this.userList.indexOf(user)
    if (i >= 0) {
      this.userList.splice(i, 1);
    }

  }


  constructor() { }

  ngOnInit(): void {
  }

}











