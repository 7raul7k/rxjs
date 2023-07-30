import { Observable } from 'rxjs';


export function ex1(){

    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    
    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');

}

export function ex2(){

  let a1 = 2;
  let b1 = 4;

  let c1 = a1 + b1;

  const observable = new Observable((subscriber) => {
    subscriber.next({
       a:1,
       b:2
    });
    subscriber.next({
      a:1,
      b:2
    });
    subscriber.next({
      a:2,
      b:4
    });
    setTimeout(() => {
      subscriber.next({
        a:5,
        b:6
      });
      subscriber.complete();
    }, 1000);
  });

  
  observable.subscribe({
    next(x) {
      c1=x.a+x.b;

      console.log(c1);  
    },
    error(err) {
      console.error('something wrong occurred: ' + err);
    },
    complete() {
      console.log('done');
    },
  });
  console.log('just after subscribe');




}