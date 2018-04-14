import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'symbols'
})
export class SymbolsPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace(/[^a-zA-Z0-9 ]/g, '');
  }
}
