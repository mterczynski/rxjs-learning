import { Component } from '@angular/core';
import { switchMapExample } from './rxjs-examples/switch-map-example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // mergeMapPatientPrescriptions()
    // concatMapExample();
    switchMapExample();
    // flatteningArraysExample();
  }
}
