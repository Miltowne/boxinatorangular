import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private readonly Userservice: UserService, private readonly router: Router) { }
  public logout(){
    this.Userservice.user = undefined;
    this.router.navigateByUrl("/login");
  }
  ngOnInit(): void {
    
  }

}
