import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { Shipment } from "src/app/models/shipment.model"; 
import { employees } from "src/app/models/employees";
import { images } from "../../models/images";

@Component({
  selector: "app-kendo-grid",
  template: `
    <kendo-grid
      [kendoGridBinding]="gridView"
      kendoGridSelectBy="id"
      [(selectedKeys)]="mySelection"
      [pageSize]="20"
      [pageable]="true"
      [sortable]="true"
      [groupable]="true"
      [reorderable]="true"
      [resizable]="true"
      [height]="500"
      [columnMenu]="{ filter: true }"
    >
      <ng-template kendoGridToolbarTemplate>
        <input
          [style.width.px]="165"
          placeholder="Search in all columns..."
          kendoTextBox
          (input)="onFilter($event)"
        />
        
      </ng-template>
      <kendo-grid-checkbox-column
        [width]="45"
        [headerClass]="{ 'text-center': true }"
        [class]="{ 'text-center': true }"
        [resizable]="false"
        [columnMenu]="false"
        [showSelectAll]="true"
      ></kendo-grid-checkbox-column>

      


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
          field="is_online"
          title="Status"
          [width]="100"
          [class]="{ 'text-center': true }"
          [resizable]="false"
          filter="numeric"
        >
          <ng-template kendoGridCellTemplate let-dataItem>
            <span
              *ngIf="dataItem.is_online === 0"
              class="badge badge-success"
              >Created</span
            >
            <span
              *ngIf="dataItem.is_online === 1"
              class="badge badge-danger"
              >Recieved</span
            >
            <span
              *ngIf="dataItem.is_online === 2"
              class="badge badge-danger"
              >Intransit</span
            >
            <span
              *ngIf="dataItem.is_online === 3"
              class="badge badge-danger"
              >Completed</span
            >
            <span
              *ngIf="dataItem.is_online === 4"
              class="badge badge-danger"
              >Cancelled</span
            >
          </ng-template>
        </kendo-grid-column>
        <kendo-grid-column field="weight" title="Weight" [width]="130">
          </kendo-grid-column>
        </kendo-grid-column-group>
        </kendo-grid>
  `,
  styles: [
    `
      .customer-photo {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-size: 32px 35px;
        background-position: center center;
        vertical-align: middle;
        line-height: 32px;
        box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0, 0, 0, 0.2);
        margin-left: 5px;
      }

      .customer-name {
        display: inline-block;
        vertical-align: middle;
        line-height: 32px;
        padding-left: 10px;
      }

      .red {
        color: #d9534f;
      }

      .text-bold {
        font-weight: 600;
      }
    `,
  ],
})
export class KendoGridComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective | undefined;
  public gridView: unknown[] | undefined;
  @Input() shipments: Shipment[] = [];
  public gridData: unknown[] = employees;
  
  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.gridView = this.gridData;
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
          },
          {
            field: "boxColor",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "weight",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding!.skip = 0;
  }

  public photoURL(dataItem: { img_id: string; gender: string }): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: { [Key: string]: string } = images;

    return image[code];
  }

  public flagURL(dataItem: { country: string }): string {
    const code: string = dataItem.country;
    const image: { [Key: string]: string } = images;

    return image[code];
  }
 
}