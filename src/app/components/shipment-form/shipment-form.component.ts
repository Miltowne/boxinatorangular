import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShipmentService } from 'src/app/services/shipment.service';
import { Shipment, ShipmentCreate } from 'src/app/models/shipment.model';
import { User } from 'src/app/models/user.model';
import { UserPage } from 'src/app/pages/user/user.page';
import { UserService } from 'src/app/services/user/user.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})
export class ShipmentFormComponent implements OnInit {

  constructor(
    private readonly shipmentService: ShipmentService,
    private readonly userService: UserService,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) { }
  public loggedIn: boolean = this.shipmentService._loggedIn;
  ngOnInit(): void {
  }
  
  public shipmentSubmit(shipmentForm: NgForm): void{
    const {receiverName, weight, destination, boxColor} = shipmentForm.value
    const userId = this.userService.user?.userId
    const email = this.userService.user?.email
    let shipment: ShipmentCreate = {RecieverName: receiverName, Weight: weight, Destination: destination, BoxColor: boxColor, ShipmentStatus: 0, UserId: userId!}
    console.log(receiverName, weight, destination, boxColor);
    this.shipmentService.CreateNewShipment(shipment)
    this.loginService.login(email!)
    this.router.navigateByUrl('/profile')
  }
}
