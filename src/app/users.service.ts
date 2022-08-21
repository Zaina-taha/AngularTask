import { Injectable } from '@angular/core';
import {UserVm} from "./users/user-list/user-list.component";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public userList: UserVm[] = [{
    name: 'zaina',
    age: '22',
    email: "tahazena32@gmail.com",
    password: '12324'
  }
  ];
}
