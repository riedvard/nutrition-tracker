import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedDate'
})
export class FormattedDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

}
