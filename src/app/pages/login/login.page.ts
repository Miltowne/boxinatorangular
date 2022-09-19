import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {

  constructor(private readonly router: Router
    ) { }

  ngOnInit(): void {
  }

  handleLogin(): void { // Redirects to the main page.
    this.router.navigateByUrl("/main")
  }

}
