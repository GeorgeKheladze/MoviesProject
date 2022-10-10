import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let v = parseInt(value);
    if(v >= 60) {
      if(v % 60 == 0) {
        return (v/60).toString() + ' Hour';
      } else {
        return (v/60).toString().split('.')[0] + ' Hour ' + v % 60 + ' Minute'; 
      }
    } else {
      return v + ' Minute';
    }
  }
}
