import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const newValue = value.split(' ')[0].split('-').join(' ');
    return newValue;
  }

}
