import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { MainPage } from './pages/main/main.page';
import { RegisterPage } from './pages/register/register.page';
import { UserPage } from './pages/user/user.page';
import { AdminPage } from './pages/admin/admin.page';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShipmentFormComponent } from './components/shipment-form/shipment-form.component';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";
import "hammerjs";
import { KendoGridComponent } from './components/kendo-grid/kendo-grid.component';
import { ProfilePage } from './pages/profile/profile.page';
import { ShipmentFormGuestuserComponent } from './components/shipment-form-guestuser/shipment-form-guestuser.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MainPage,
    RegisterPage,
    ShipmentFormComponent,
    UserPage,
    AdminPage,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent,
    KendoGridComponent,
    ProfilePage,
    ShipmentFormGuestuserComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    ExcelModule,
    ChartsModule,
    InputsModule,
  ],
  bootstrap: [AppComponent],
  providers: [],

})
export class AppModule { }
