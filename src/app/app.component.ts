import { Component } from '@angular/core';
import { flatteningArraysExample } from './rxjs-examples';
import { Observable } from 'rxjs';
import { mergeMapPatientPrescriptions } from './rxjs-examples/merge-map-patient-prescriptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    mergeMapPatientPrescriptions()
  }
}
