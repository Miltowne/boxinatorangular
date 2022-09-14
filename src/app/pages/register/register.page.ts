import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  constructor(
    private readonly service: LoginService
  ) { }

  ngOnInit(): void {
    // this.service.createUser().subscribe({
    //   next: (user: User) => {console.log(user)},
    //   error: (error: HttpErrorResponse) => {console.log(error.message)}
    // })

    // this.service.createUserAxios()
  }
  
}
