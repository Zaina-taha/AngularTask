import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
export interface UserVm {
  name: string;
  age: string;
  email:string;
  password:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userList: UserVm[]=[{
    name:'zaina',
    age: '22',
    email:"tahazena32@gmail.com",
     password:'12324'
  }
  ];

  public newUserVm: UserVm ={name:'',age:'',email:'',password:''};



  public addUser(form:NgForm){

    console.log(form.form.valid,this.newUserVm)
    if(!form.form.valid){
    form.form.markAllAsTouched();}
    else{
    this.userList.push(this.newUserVm)}
   

  }

  deleteUser(user:UserVm){
    let i=this.userList.indexOf(user)
    if(i>=0){
      this.userList.splice(i,1);
    }
    
  }
  }







