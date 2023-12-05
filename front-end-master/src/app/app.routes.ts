import { Router, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { RegisterPageComponent } from '../components/register-page/register-page.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        component:LoginPageComponent
    },
    {
        path:'login',
        component:LoginPageComponent
    },
    {
        path:'register',
        component:RegisterPageComponent
    },
    {
      path:'homepage',
      component:HomePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
    constructor(
      private router: Router
    ) {
      this.router.events
    }
  }
