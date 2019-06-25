import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

interface Patient {
  id: number;
  name: string;
}

function getPatientPrescriptions(): Observable<any> {
  return new Observable(observer => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);

    setTimeout(() => {
      observer.next(2);
      observer.complete();
    }, 2000);
  });
}

export function exhaustMapExample() {
  const patientObservable = new Observable<Patient>(observer => {
    observer.next({
      id: 1,
      name: 'Michael',
    });

    setTimeout(() => {
      observer.next({
        id: 2,
        name: 'John',
      });
    }, 1000);

    setTimeout(() => {
      observer.next({
        id: 3,
        name: 'Gabriel',
      });

      observer.complete();
    }, 3000);
  });

  const startDate = Date.now();

  patientObservable
    .pipe(
      exhaustMap(patient => getPatientPrescriptions()),
    )
    .subscribe(
      val => console.log(`emitted `, val, ` after ${Date.now() - startDate}ms`),
      () => {} ,
      () => console.log('=== Exhaust map example completed ==='),
    );
}

export const exhaustMapExampleCode =
`
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

interface Patient {
  id: number;
  name: string;
}

function getPatientPrescriptions(): Observable<any> {
  return new Observable(observer => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);

    setTimeout(() => {
      observer.next(2);
      observer.complete();
    }, 2000);
  });
}

export function exhaustMapExample() {
  const patientObservable = new Observable<Patient>(observer => {
    observer.next({
      id: 1,
      name: 'Michael',
    });

    setTimeout(() => {
      observer.next({
        id: 2,
        name: 'John',
      });
    }, 1000);

    setTimeout(() => {
      observer.next({
        id: 3,
        name: 'Gabriel',
      });

      observer.complete();
    }, 3000);
  });

  const startDate = Date.now();

  patientObservable
    .pipe(
      exhaustMap(patient => getPatientPrescriptions()),
    )
    .subscribe(
      val => console.log(\`emitted; \`, val, \`; after; $;{Date.now() - startDate;}ms\`),
      () => {} ,
      () => console.log('=== Exhaust map example completed ==='),
    );
}`;
