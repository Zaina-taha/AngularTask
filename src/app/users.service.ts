import { Injectable } from '@angular/core';
import {UserVm} from "./users/user-list/user-list.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor() { }

  public userList: UserVm[] = [{
    name: 'zaina',
    email: "@gmail.com",
    password: '12324'
  }
  ];
}
