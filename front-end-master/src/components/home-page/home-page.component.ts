import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  imports:[],
})
export class HomePageComponent {

  constructor(){

  }

  ngOnInIt(){
    this.selectedTab=this.tabs[0]
  }
  
  public tabs = ['Home','Services','Contact','About']
  public selectedTab:string = "";




     
}
