import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos = {
    name: 'chris',
    email: 'chris@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
