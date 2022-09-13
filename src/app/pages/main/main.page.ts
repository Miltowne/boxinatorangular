import { Component, OnInit } from '@angular/core';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage implements OnInit {

  constructor(
    private readonly shipmentService: ShipmentService
  ) { }

  public loggedIn: boolean = false;

  public makeLoggedIn(){
    if(this.loggedIn){
      this.loggedIn = false
    console.log("making it false")

    }
    else{
      this.loggedIn = true
    console.log("making it true")

    }
  }

  

  ngOnInit(): void {
  }

}
