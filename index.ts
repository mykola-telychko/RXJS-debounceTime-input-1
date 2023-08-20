import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/debouncetime

// Example 1: Debouncing based on time between input
const searchBox = document.getElementById('search');

// streams
const keyup$ = fromEvent(searchBox, 'keyup');

// wait .5s between keyups to emit current value
keyup$
  .pipe(
    map((i: any) => i.currentTarget.value),
    debounceTime(500)
  )
  .subscribe(console.log);
