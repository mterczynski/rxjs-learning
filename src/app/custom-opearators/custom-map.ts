import { Observable, OperatorFunction } from 'rxjs';

export function customMap<A, B>(cb: (val: A) => B): OperatorFunction<A, B> {
  return (observable) => {
    return Observable.create(observer => {
      observable.subscribe(val => {
        observer.next(cb(val));
      });
    });
  };
}

export const customMapCode = `
import { Observable, OperatorFunction } from 'rxjs';

export function customMap<A, B>(cb: (val: A) => B): OperatorFunction<A, B> {
  return (observable) => {
    return Observable.create(observer => {
      observable.subscribe(val => {
        observer.next(cb(val));
      });
    });
  };
}`;
