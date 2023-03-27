import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelected'
})
export class FilterSelectedPipe implements PipeTransform {

  transform(values: any[], ...args: unknown[]): any[] {
    return values.filter(v => v.selected == false);
  }

}
