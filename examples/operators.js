import { of, first } from 'rxjs';

export function exampleOperator(){
of(1, 2, 3)
  .pipe(first())
  .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
}