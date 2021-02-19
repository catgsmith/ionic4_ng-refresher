import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  personListSubs: Subscription;
  //private prsnService: PersonsService; 

  constructor(private prsService: PersonsService) {
    //this.prsnService = prsnService; // adding private into constructor is shortcut for this assignment
  }

  ngOnInit(): void {
    // use lifecycle hook to get service info (better that doing in constructor)
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
    this.personList = this.prsService.persons;
  }

  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }

  onRemovePerson(name: string) {
    this.prsService.removePerson(name);
  } 
}
