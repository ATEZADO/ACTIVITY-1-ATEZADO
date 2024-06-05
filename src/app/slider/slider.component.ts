import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {

  volume = 100;
  constructor() { }

  ngOnInit() {}

}