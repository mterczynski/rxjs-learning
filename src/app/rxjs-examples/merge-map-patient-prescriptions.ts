import { Observable, timer } from 'rxjs';
import { mapTo, mergeMap } from 'rxjs/operators';

interface Patient {
  id: number;
  name: string;
}

interface Prescription {
  id: number;
}

function getPatientPrescriptions(patientId: number): Observable<any> {
  return timer(1000)
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
    }, 1000)

    setTimeout(() => {
      observer.next({
        id: 2,
        name: 'Darlene',
      })
    }, 3000)
  });

  patientObservable
    .pipe(
      mergeMap(patient => getPatientPrescriptions(patient.id)),

    )
    .subscribe(console.log)
}
