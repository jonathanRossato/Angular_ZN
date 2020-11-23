import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toggle: boolean;



  constructor() { }

  ngOnInit(): void {
  }


  expandirSidebar(event: Event){
    console.log(event);
    
    this.toggle = true;
  }

  mudarActive(){
    this.toggle = !this.toggle;
  }
}
