import { Component } from '@angular/core';
import { concatMapExample, mergeMapExample, switchMapExample, flatteningArraysExample, switchMapExampleCode, flatteningArraysExampleCode, concatMapExampleCode, mergeMapExampleCode } from './rxjs-examples';
import { exhaustMapExample, exhaustMapExampleCode } from './rxjs-examples/exhaust-map.example';
import { customMapCode } from './custom-opearators/custom-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  examples = {
    switchMap: [switchMapExample, switchMapExampleCode],
    mergeMap: [mergeMapExample, mergeMapExampleCode],
    concatMap: [concatMapExample, concatMapExampleCode],
    flatteningArrays: [flatteningArraysExample, flatteningArraysExampleCode],
    exhaustMap: [exhaustMapExample, exhaustMapExampleCode],
  };

  customOperatorsCode = {
    map: customMapCode
  };

  displayedCode = '';

  runExample(example: [() => void, string]) {
    example[0]();
    this.displayedCode = example[1];
  }
}
