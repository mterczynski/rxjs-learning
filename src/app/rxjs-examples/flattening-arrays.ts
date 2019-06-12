import { of } from "rxjs";
import { switchMap, mergeMap, exhaustMap, concatMap } from "rxjs/operators";

const source = of([1, 2], [3, 4]);

export function flatteningArraysExample() {
  console.log('=== SWITCH MAP ===')
  source
    .pipe(switchMap(arr => arr))
    .subscribe(console.log, console.error)

  console.log('=== MERGE MAP ===')
  source
    .pipe(mergeMap(arr => arr))
    .subscribe(console.log, console.error)

  console.log('=== CONCAT MAP ===')
  source
    .pipe(concatMap(arr => arr))
    .subscribe(console.log, console.error)

  console.log('=== EXHAUST MAP ===')
  source
    .pipe(exhaustMap(arr => arr))
    .subscribe(console.log, console.error)
}


