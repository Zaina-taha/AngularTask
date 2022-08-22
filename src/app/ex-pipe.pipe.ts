import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exPipe'
})
export class ExPipePipe implements PipeTransform {
  transform(DateOfBirth?: Date): number {

    if (DateOfBirth != undefined) {
      var res = new Date(DateOfBirth).getTime()
      let timeDiff = Math.abs(Date.now() - res);
      let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
      return age;
    }
    return 0;
  }




}
