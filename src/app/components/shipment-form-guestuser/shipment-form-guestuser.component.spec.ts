import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentFormGuestuserComponent } from './shipment-form-guestuser.component';

describe('ShipmentFormGuestuserComponent', () => {
  let component: ShipmentFormGuestuserComponent;
  let fixture: ComponentFixture<ShipmentFormGuestuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentFormGuestuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentFormGuestuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
