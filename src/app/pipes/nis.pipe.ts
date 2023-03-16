import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nis'
})
export class NisPipe implements PipeTransform {

  transform(value: number = 0,): string {
    return `${value} ₪`;
  }

}
