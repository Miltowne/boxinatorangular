import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shipment } from 'src/app/models/shipment.model';
import { ProfileService } from 'src/app/services/profile.service';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  constructor(
    private readonly service: ShipmentService
  ) { }

  public shipments$: Observable<Shipment[]> | undefined;
  // get shipments(): Shipment[]{
  //   return this.service.shipments
  // }

  ngOnInit(): void {
    this.shipments$ = this.service.GetAllUserShipments();

    this.service.init();
  }

}
