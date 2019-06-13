import { Component } from '@angular/core';
import { concatMapExample, mergeMapExample, switchMapExample, flatteningArraysExample } from './rxjs-examples';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  examples = {
    switchMap: switchMapExample,
    mergeMap: mergeMapExample,
    concatMap: concatMapExample,
    flatteningArrays: flatteningArraysExample,
  };
}
