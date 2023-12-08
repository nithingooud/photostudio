import { NgModule } from "@angular/core";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { LoginPageComponent } from "../components/login-page/login-page.component";
import { RegisterPageComponent } from "../components/register-page/register-page.component";
import { Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routes";
import {MatIconModule} from "@angular/material/icon"

@NgModule({
    declarations:[
        HomePageComponent,
        NavbarComponent,
        LoginPageComponent,
        RegisterPageComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      MatIconModule
    ]
})

export class AppModule {
    constructor(
      private router: Router
    ) {
      this.router.events
    }
  }