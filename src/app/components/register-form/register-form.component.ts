import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

public regUser: UserRegister | undefined;



  constructor(
    private readonly service: LoginService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.regUser = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword: '',
    country:'',
    postalCode:0,
    phoneNumber:0,
    }
  }

  save(model: UserRegister, isValid: boolean) {
    console.log(model, isValid)
    if(!isValid){
      alert("passwords des not match")
    }
    else{
      this.registerSubmit(model)
    }
  }

  public registerSubmit(user: any){
    const {firstname, lastname, email, password, country, postalcode, phonenumber } = user

    this.service.createUserAxios(firstname, lastname, email, password, country, postalcode, phonenumber)

    this.router.navigateByUrl("/main")

    


  }


}
