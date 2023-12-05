import { NgModule } from "@angular/core";
import { HomePageComponent } from "../components/home-page/home-page.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { LoginPageComponent } from "../components/login-page/login-page.component";
import { RegisterPageComponent } from "../components/register-page/register-page.component";
import { Router } from "@angular/router";

@NgModule({
    declarations:[
        HomePageComponent,
        NavbarComponent,
        LoginPageComponent,
        RegisterPageComponent
    ],
})

export class AppModule {
    constructor(
      private router: Router
    ) {
      this.router.events
    }
  }