import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserVm} from "../app.component";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() submit: EventEmitter<UserVm> =   new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public newUserVm: UserVm ={name:'',age:'',email:'',password:''};

  public addUser(form:NgForm){

    console.log(form.form.valid,this.newUserVm)
    if(!form.form.valid){
      form.form.markAllAsTouched();}
    else{
      this.submit.emit(this.newUserVm)}
}}
