import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

interface Patient {
  id: number;
  name: string;
}


let counter = 0;

function getPatientPrescriptions(patientId: number): Observable<any> {
  if (counter === 0) {
    counter++;

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 3000);

      setTimeout(() => {
        observer.next(2);
      }, 4000);

      setTimeout(() => {
        observer.complete();
      }, 4000);
    });
  } else {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(3);
      }, 1000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });
  }

}

export function concatMapExample() {
  const patientObservable = new Observable<Patient>(observer => {
    setTimeout(() => {
      observer.next({
        id: 1,
        name: 'Michael',
      });
    }, 0);

    setTimeout(() => {
      observer.next({
        id: 2,
        name: 'Darlene',
      });
    }, 1000);
  });

  const startDate = Date.now();

  patientObservable
    .pipe(
      concatMap(patient => getPatientPrescriptions(patient.id)),
    )
    .subscribe(val => console.log(`emitted `, val, ` after ${Date.now() - startDate}ms`), () => {} , () => console.log('completed'));
}
