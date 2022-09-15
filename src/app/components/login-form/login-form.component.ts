import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  // Emits the events to the parent component
  @Output() login: EventEmitter<void> = new EventEmitter();

  // Dependency Injections
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
    ) { }

  ngOnInit(): void {
  }

  public loginSubmit(loginForm: NgForm): void{
    // Username
    const { email } = loginForm.value;

    this.loginService.login(email);
    this.login.emit();
    console.log("you have now logged in")
  }
}
