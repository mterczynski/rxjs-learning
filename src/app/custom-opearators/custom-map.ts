import { Observable, OperatorFunction } from 'rxjs';

export function customMap<A, B>(cb: (val: A) => B): OperatorFunction<A, B> {
  return (observable) => {
    console.log('operator function called')
    return Observable.create(observer => {
      console.log('subscribed to original observable')
      observable.subscribe(val => {
        observer.next(cb(val))
      })
    })
  }
}
