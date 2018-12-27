import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fruits: any, term: any): any {
    if(term === undefined ) return fruits;

    return fruits.filter(function(fruit){
      return fruit.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
