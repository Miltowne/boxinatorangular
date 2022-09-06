import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { MainPage } from './pages/main/main.page';
import { RegisterPage } from './pages/register/register.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AdminPage } from './pages/admin/admin.page';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShipmentFormComponent } from './components/shipment-form/shipment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MainPage,
    RegisterPage,
    ProfilePage,
    AdminPage,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent,
    ShipmentFormComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [],

})
export class AppModule { }
