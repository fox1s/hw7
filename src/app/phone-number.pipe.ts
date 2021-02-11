import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.split(' ')[0].split('-').join(' ');
  }

}
