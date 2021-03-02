import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-custom-toggle-switch',
  templateUrl: './custom-toggle-switch.component.html',
  styleUrls: ['./custom-toggle-switch.component.css'],
})
export class CustomToggleSwitchComponent implements OnInit {
  switchState: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onToggle(event: Event) {
    this.switchState = !this.switchState;
  }
}
