import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  public email:string = '';
  public pass:string = '';
  public hide:boolean = false
  constructor(private router:Router){

  }
  login(){
    
  }

}
