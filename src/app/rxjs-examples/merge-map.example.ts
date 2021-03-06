import { Observable, timer } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';

interface Patient {
  id: number;
  name: string;
}

function getPatientPrescriptions(patientId: number): Observable<any> {
  return timer(2000)
    .pipe(
      mapTo(
        [
          {
            id: Math.floor(Math.random() * 100) + 1
          },
          {
            id: Math.floor(Math.random() * 100) + 1
          }
        ]
      )
    );
}

export function mergeMapExample() {
  const patientObservable = new Observable<Patient>(observer => {
    observer.next({
      id: 1,
      name: 'Michael',
    });

    setTimeout(() => {
      observer.next({
        id: 2,
        name: 'Darlene',
      });
      observer.complete();
    }, 1000);
  });

  const startDate = Date.now();

  patientObservable
    .pipe(
      mergeMap(patient => getPatientPrescriptions(patient.id)),
    )
    .subscribe(
      val => console.log(`emitted `, val, ` after ${Date.now() - startDate}ms`),
      () => {},
      () => console.log('=== Merge map example completed ==='),
    );
}


export const mergeMapExampleCode =
`
import { Observable, timer } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';

interface Patient {
  id: number;
  name: string;
}

function getPatientPrescriptions(patientId: number): Observable<any> {
  return timer(2000)
    .pipe(
      mapTo(
        [
          {
            id: Math.floor(Math.random() * 100) + 1
          },
          {
            id: Math.floor(Math.random() * 100) + 1
          }
        ]
      )
    );
}

export function mergeMapExample() {
  const patientObservable = new Observable<Patient>(observer => {
    observer.next({
      id: 1,
      name: 'Michael',
    });

    setTimeout(() => {
      observer.next({
        id: 2,
        name: 'Darlene',
      });
      observer.complete();
    }, 1000);
  });

  const startDate = Date.now();

  patientObservable
    .pipe(
      mergeMap(patient => getPatientPrescriptions(patient.id)),
    )
    .subscribe(
      val => console.log(\`emitted \`, val, \` after \${Date.now() - startDate}ms\`),
      () => {},
      () => console.log('=== Merge map example completed ==='),
    );
}`;
