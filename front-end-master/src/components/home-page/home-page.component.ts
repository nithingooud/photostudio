import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  constructor(private scroller : ViewportScroller,private router:Router){

  }

  ngOnInIt():void{
    this.router.navigate(['homepage']);
    this.selectedTab=this.tabs[0]
  }

  goToHome(){
    document.getElementById('home')?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"});
  }

  goToServices(){
    // this.scroller.scrollToAnchor('services')
    document.getElementById('services')?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"});
  }

  goToAbout(){
    // this.scroller.scrollToAnchor('about')
    document.getElementById('about')?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"});
  }

  gotToContact(){
    // this.scroller.scrollToAnchor('contact')

    document.getElementById('contact')?.scrollIntoView({behavior: "smooth",
    block: "start",
    inline: "nearest"});
  }
  
  public tabs = ['Home','Services','Contact','About']
  public selectedTab:string = "";




     
}
