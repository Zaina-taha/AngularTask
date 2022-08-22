import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import {UserFormComponent} from "./user-form/user-form.component";
import {UserListComponent} from "./user-list/user-list.component";
import {FormsModule} from "@angular/forms";
import {ExPipePipe} from "../ex-pipe.pipe";
import {UsersService} from "../users.service";


@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent,
    ExPipePipe



  ],
  imports: [

    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [UsersService, ExPipePipe, DatePipe]
})
export class UsersModule { }
