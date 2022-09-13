import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/shipment.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  constructor(
    private readonly service: ProfileService
  ) { }

  get shipments(): Shipment[]{
    return this.service.shipments
  }

  ngOnInit(): void {
    this.service.GetAllUserShipments()
  }

}
