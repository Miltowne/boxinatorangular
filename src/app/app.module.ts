import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap } from '@angular/core';
import { LoginPage } from './pages/login/login.page';
import { MainPage } from './pages/main/main.page';
import { RegisterPage } from './pages/register/register.page';
import { UserPage } from './pages/user/user.page';
import { AdminPage } from './pages/admin/admin.page';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MainPage,
    RegisterPage,
    UserPage,
    AdminPage,
    LoginFormComponent,
    RegisterFormComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  bootstrap: [AppComponent],
  providers: [],

})
export class AppModule { }
