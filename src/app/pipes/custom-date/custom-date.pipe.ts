import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UNKNOWN, DATE_FORMATS } from 'src/app/constant/constants';
import { toLowerCase } from 'src/app/constant/helper-methids';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (value) {
      switch (args) {
        case 'DATE_WITH_AT':
          const dateWithAt = `${super.transform(value, DATE_FORMATS.ONLY_DATE)} at ${toLowerCase(super.transform(value, DATE_FORMATS.ONLY_TIME))}`
          return dateWithAt;
        default:
          throw UNKNOWN;
      }
    }
  }
}
