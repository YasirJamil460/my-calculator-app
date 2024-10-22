import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcPipes',
  standalone: true
})
export class CalcPipesPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }

    // Convert the value to a string
    const stringValue = value.toString();
    
    // Split into whole and fractional parts
    const parts = stringValue.split('.');
    const wholePart = parts[0];
    const fractionalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Add commas to the whole part
    const withCommas = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return withCommas + fractionalPart;
  }

}
