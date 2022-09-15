import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private readonly service: LoginService
  ) { }

  ngOnInit(): void {
  }

  public registerSubmit(form: NgForm){
    const {firstname, lastname, email, password, country, postalcode, phonenumber } = form.value

    this.service.createUserAxios(firstname, lastname, email, password, country, postalcode, phonenumber)

    console.log(firstname)
    console.log(lastname)
    

    // this.service.createUserAxios()
  }


}
 // const body = { FirstName: "pelle",
        // LastName: "Larsson",
        // Email: "pelle@larsson.com",
        // Password: "abcde123",
        // Country: "SV",
        // PostalCode: 12345,
        // PhoneNumber: 701234567,
        // DataOfBirth: Date.now(),
        // AccountType: 1 }