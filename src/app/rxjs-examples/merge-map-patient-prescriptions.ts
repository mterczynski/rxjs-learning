import { Observable, timer } from 'rxjs';
import { mapTo, mergeMap, switchMap } from 'rxjs/operators';

interface Patient {
  id: number;
  name: string;
}

interface Prescription {
  id: number;
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
    )
}

export function mergeMapPatientPrescriptions() {
  const patientObservable = new Observable<Patient>(observer => {
    setTimeout(() => {
      observer.next({
        id: 1,
        name: 'Michael',
      })
    }, 0)

    setTimeout(() => {
      observer.next({
        id: 2,
        name: 'Darlene',
      })
    }, 1000)
  });

  let startDate = Date.now();

  patientObservable
    .pipe(
      mergeMap(patient => getPatientPrescriptions(patient.id)),
    )
    .subscribe(val => console.log(`emitted `, val, ` after ${Date.now() - startDate}ms`), () =>{} , () => console.log('completed'))
}
