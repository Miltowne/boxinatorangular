import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { Shipment } from "src/app/models/shipment.model";
import { images } from "../../models/images";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user/user.service";

@Component({
  styleUrls: ['./kendo-grid.css'],
  selector: "app-kendo-grid",
  template: `
  
    <kendo-grid
      [kendoGridBinding]="gridData"
      kendoGridSelectBy="id"
      [(selectedKeys)]="mySelection"
      [pageSize]="20"
      [pageable]="true"
      [sortable]="true"
      [groupable]="false"
      [reorderable]="true"
      [resizable]="true"
      [height]="500"
      [columnMenu]="{ filter: false }"
    >

    

    
  <kendo-grid-column-group title="Shipments" [columnMenu]="false">
    <kendo-grid-column field="recieverName" title="Reciever Name" [width]="220">
      <ng-template kendoGridCellTemplate let-dataItem>
        <div class="customer-name">{{ dataItem.recieverName }}</div>
      </ng-template>
    </kendo-grid-column>
    <kendo-grid-column field="boxColor" title="Box Color" [width]="220">
      </kendo-grid-column>
      <kendo-grid-column
      field="country"
      title="Country"
      [width]="100"
      [class]="{ 'text-center': true }"
      [resizable]="false"
      >
      <ng-template kendoGridCellTemplate let-dataItem>
        <img class="flag" [src]="flagURL(dataItem)" [width]="30" />
      </ng-template>
    </kendo-grid-column>
    <kendo-grid-column
    field="shipmentStatus"
    title="Status"
    [width]="100"
    [class]="{ 'text-center': true }"
    [resizable]="false"
    filter="numeric"
    >
    <ng-template kendoGridCellTemplate let-dataItem>
      <span
      *ngIf="dataItem.shipmentStatus === 0"
      class="badge badge-success"
      >Created</span
      >
      <span
      *ngIf="dataItem.shipmentStatus === 1"
      class="badge badge-danger"
      >Recieved</span
      >
      <span
      *ngIf="dataItem.shipmentStatus === 2"
      class="badge badge-danger"
      >Intransit</span
      >
      <span
      *ngIf="dataItem.shipmentStatus === 3"
      class="badge badge-danger"
      >Completed</span
      >
      <span
      *ngIf="dataItem.shipmentStatus === 4"
      class="badge badge-danger"
      >Cancelled</span
      >
    </ng-template>
  </kendo-grid-column>
  <kendo-grid-column field="weight" title="Weight" [width]="130">
    </kendo-grid-column>
  </kendo-grid-column-group>
</kendo-grid>

`



    

})
export class KendoGridComponent implements OnInit {
  constructor(
    private readonly userService: UserService
  ){}
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective | undefined;
  public gridView: unknown[] | undefined;
  @Input() shipments: Observable<Shipment[]> | undefined;
  public gridData: Shipment[] = [];
  public mySelection: string[] = [];
  public ngOnInit(): void {
    this.gridView = this.gridData;
    this.shipments?.subscribe((shipmentsList: Shipment[]) => {
      this.gridData = shipmentsList
    })
  }
  public onFilter(input: Event): void {
    const inputValue = (input.target as HTMLInputElement).value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "recieverName",
            operator: "contains",
            value: inputValue,
          }
        ],
      },
    }).data;
    this.dataBinding!.skip = 0;
  }
  public flagURL(dataItem: { destination: string }): string {
    const code: string = dataItem.destination;
    const image: { [Key: string]: string } = images;
    return image[code];
  }
}