import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  container: HTMLDivElement;

  constructor() { }
  
  ngOnInit(): void {
    if(document.getElementById('message')){
      this.container = document.getElementById('message') as HTMLDivElement;
    }
  }
  
  close(){
    this.container.style.display = 'none';
  }

}
