import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons = ['Max', 'Manuel', 'Anna'];
  
  addPerson(name: string) {
    this.persons.push(name);
    console.log('Added a person called ' + name);
  }
}
